import path from 'node:path';

export default /** @type {import('astro').AstroUserConfig} */ ({
  devOptions: {
    // hostname: 'localhost',  // The hostname to run the dev server on.
    // port: 3000,             // The port to run the dev server on.
    tailwindConfig: './tailwind.config.js',
  },
  renderers: ["@astrojs/renderer-preact"],
  buildOptions: {
    site: "",
    sitemap: true,
  },
  vite: {
    resolve: {
      alias: {
        $src: path.resolve('./src'),
        $components: path.resolve('./src/components'),
        $layouts: path.resolve('./src/layouts'),
        $layouts: path.resolve('./src/api'),
      },
    },
    define: {
      'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
    },
  },
});