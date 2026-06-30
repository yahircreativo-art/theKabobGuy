// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
    site: 'https://yahircreativo-art',
    base: '/theKabobGuy',
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar: {
        enabled:false
    },
});
