const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    preserve: ["ld+json"],
    scss: {
      includePaths: ["src"],
    },
    postcss: {
      plugins: [require("autoprefixer")],
    },
  }),
};
