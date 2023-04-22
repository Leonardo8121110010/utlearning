import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/welcome.js',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],
});
