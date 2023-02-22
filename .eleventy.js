const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
require('dotenv').config()
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
  eleventyConfig.addShortcode('img', (image, width, height)=>{
    const url = process.env.API + "/assets/" + image + "?quality=50&fit=cover" + (width? '&width=' + width : '') + (height? '&height=' + height : '')
    return url
  
  })

  eleventyConfig.addPlugin(EleventyVitePlugin);
  return {
    dir:{
      input:'src'
    }
  }
};