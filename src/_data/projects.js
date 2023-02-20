require('dotenv').config()
module.exports = async ()=>{
  const req = await fetch(process.env.API + '/items/projects/?fields=*.*.*', {
    method:'GET',
    headers:{
        Authorization: `Bearer ${process.env.TOKEN}`
    }
})
  return (await req.json()).data
}