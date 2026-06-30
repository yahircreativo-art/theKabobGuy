// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import github from "@astrojs/github-pages";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar: {
        enabled:false
    },
    site: 'https://yahircreativo-art',
    adapter: github(),
});
