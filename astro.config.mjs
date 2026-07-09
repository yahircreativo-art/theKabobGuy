// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
    site: 'https://yahircreativo-art.github.io',
    base: '/thekabobguy',
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar: {
        enabled:false
    },
});
