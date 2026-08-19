// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
    site: 'https://thekabobguy.vercel.app',
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar: {
        enabled:false
    },
});
