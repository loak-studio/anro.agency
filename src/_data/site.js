require('dotenv').config()

module.exports = ()=>{
  return{
    "url": process.env.PUBLIC_URL,
    "api":process.env.API
  }
}