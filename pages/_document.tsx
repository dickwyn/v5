import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';

const DEBUG_CSS = false;

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* google fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=IBM+Plex+Mono&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500&family=IBM+Plex+Serif:ital@0;1&display=swap"
                        rel="stylesheet"
                    />
                    {/* mui */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    {/* modern-favicons */}
                    <link rel="icon" href="/favicon-48.png" type="image/png" />
                    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                    <link rel="apple-touch-icon" href="/favicon-apple-touch.png" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body className={DEBUG_CSS ? 'debug' : ''}>
                    {/* as recommended by library https://github.com/transitive-bullshit/use-dark-mode#nextjs */}
                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src="noflash.js" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
