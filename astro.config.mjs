// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
    base: /theKabobGuy/,
    site: 'https://thekabobguy.com',    
    vite: {
        plugins: [tailwindcss()],
    },
    devToolbar: {
        enabled:false
    },
});
