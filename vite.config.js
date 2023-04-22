import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
    plugins: [
        basicSsl(),

        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/css/welcome.css',
                'resources/css/app.css',

            ],
            refresh: true,
            https: true,
        }),
    ],
});
