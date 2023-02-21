const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("log", function(value) { console.log(" --- LOG:",value) });
  eleventyConfig.addFilter("year", (value)=>{
    const date = new Date(value)
    return date.getFullYear()
  })
  eleventyConfig.addFilter("monthAndYear", (value)=>{
    const date = new Date(value)
    return date.toLocaleDateString('fr-fr', {month:'long', year:'numeric'})
  })
  eleventyConfig.addPassthroughCopy({ "public": "/" })
  eleventyConfig.addPlugin(EleventyVitePlugin);
  
  return {
    dir:{
      input:'src'
    }
  }
};