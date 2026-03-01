// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isProd = process.env.VERCEL_ENV === "production";

export default defineConfig({
    site: "https://mahlogic.africa",
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        // Only generate sitemap on production deployments
        ...(isProd ? [sitemap()] : []),
    ],
});
