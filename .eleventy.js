const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("log", function(value) { console.log(" --- LOG:",value) });

  eleventyConfig.addPassthroughCopy({ "public": "/" })
  eleventyConfig.addPlugin(EleventyVitePlugin);
  
  return {
    dir:{
      input:'src'
    }
  }
};