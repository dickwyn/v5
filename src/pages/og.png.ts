import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

export const prerender = false;

const WIDTH = 1200;
const HEIGHT = 630;
const BRAND_COLOR = '#d84c4c';

const LOGO_PATH =
	'M69.7467 87.0713C65.3062 87.6904 60.6735 88 55.8486 88H0V0H55.7205' +
	'C60.5454 0 65.1781 0.309558 69.6186 0.928675C74.0592 1.54779 78.2116' +
	' 2.54051 82.0757 3.90684C85.9398 5.27317 89.4517 7.07715 92.6114' +
	' 9.31878C95.771 11.5604 98.4716 14.3144 100.713 17.5808C102.955' +
	' 20.8472 104.695 24.6579 105.933 29.0131C107.171 33.3683 107.79' +
	' 38.3426 107.79 43.936C107.79 49.5721 107.171 54.5784 105.933' +
	' 58.9549C104.695 63.3314 102.955 67.1422 100.713 70.3872C98.4716' +
	' 73.6322 95.7817 76.3862 92.6434 78.6492C89.5051 80.9122 86.0146' +
	' 82.7268 82.1718 84.0932C78.329 85.4595 74.1873 86.4522 69.7467' +
	' 87.0713ZM23.7612 68.8501H53.2867C58.8801 68.8501 63.6196 68.3484' +
	' 67.5051 67.345C71.3905 66.3416 74.5395 64.8045 76.9519 62.7336' +
	'C79.3643 60.6628 81.115 58.0689 82.2038 54.952C83.2925 51.835' +
	' 83.8369 48.163 83.8369 43.936C83.8369 39.7089 83.2925 36.0369' +
	' 82.2038 32.92C81.115 29.803 79.3643 27.2305 76.9519 25.2023' +
	'C74.5395 23.1742 71.3905 21.6584 67.5051 20.655C63.6196 19.6516' +
	' 58.8801 19.1499 53.2867 19.1499H23.7612V68.8501ZM178.114 88' +
	'L201.042 28.821L224.035 88H250.422L285.776 0H261.118L236.78' +
	' 61.1004L214.3 0H187.849L164.856 59.8195L141.031 0H116.309' +
	'L151.726 88H178.114ZM356.099 52.0699V88H332.402V52.0699L289.747' +
	' 0H316.39L344.314 35.4178L372.111 0H398.754L356.099 52.0699Z';

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function wrapTitle(title: string, maxCharsPerLine: number): string[] {
	const words = title.split(/\s+/);
	const lines: string[] = [];
	let current = '';

	for (const word of words) {
		if (current && current.length + 1 + word.length > maxCharsPerLine) {
			lines.push(current);
			current = word;
		} else {
			current = current ? `${current} ${word}` : word;
		}
	}
	if (current) lines.push(current);

	return lines.slice(0, 3);
}

function buildSvg(title: string): string {
	const escaped = escapeXml(title);
	const lines = wrapTitle(escaped, 35);
	const lineHeight = 56;
	const startY = 240 - ((lines.length - 1) * lineHeight) / 2;

	const titleLines = lines
		.map((line, i) => `<text x="80" y="${startY + i * lineHeight}" font-family="sans-serif" font-weight="600" font-size="48" fill="#FFFFFF">${line}</text>`)
		.join('\n    ');

	return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#111111"/>
  <rect x="0" y="0" width="${WIDTH}" height="6" fill="${BRAND_COLOR}"/>
  <g transform="translate(80, 500) scale(0.35)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="${LOGO_PATH}" fill="#999999"/>
  </g>
  <text x="240" y="523" font-family="sans-serif" font-size="20" fill="#666666">dickwyn.com</text>
  ${titleLines}
</svg>`;
}

export const GET: APIRoute = async ({ url }) => {
	const title = url.searchParams.get('title');

	if (title === null || title === '') {
		const fallbackPath = path.join(process.cwd(), 'public', 'images', 'brand', 'og-default.png');

		try {
			const fallbackBuffer = fs.readFileSync(fallbackPath);
			return new Response(fallbackBuffer, {
				headers: {
					'Content-Type': 'image/png',
					'Cache-Control': 'public, max-age=31536000, immutable',
				},
			});
		} catch {
			return new Response('Default OG image not found', { status: 404 });
		}
	}

	const svg = buildSvg(title);
	const pngBuffer = await sharp(Buffer.from(svg)).resize(WIDTH, HEIGHT).png().toBuffer();

	return new Response(pngBuffer, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
