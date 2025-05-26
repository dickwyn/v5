import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            'no-console': 'warn',
            'no-debugger': 'error',
        },
    },
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            react: reactPlugin,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
        },
    },
    ...tseslint.configs.recommended,
    {
        ignores: ['**/node_modules/**', '**/dist/**', '.astro/**', '**/.astro/**'],
    },
];
