require('dotenv').config()

module.exports = ()=>{
  return{
    "url": process.env.URL,
    "api":process.env.API
  }
}