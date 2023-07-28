const {Favorite} = require('../DB_connection');

async function postFav(req,res){
   
 try {
  const {id, name, origin, status, image, species, gender} = req.body
  if(!name || !origin || !status || !image || !species || !gender){
     return res.status(401).send('Faltan datos')
  }
  let newFav = await Favorite.findOrCreate({
   where:{name:name}, 
   defaults:{id:id, name:name, origin:origin, status:status, image:image, species:species, gender:gender} 
})
  if (!newFav[1]) {
   return res.status(404).send('No existe el personaje')
  } 
  
  return res.status(201).send(newFav[0]) 
 } catch (error) {
  return res.status(500).send(error)
  }


}

module.exports = {postFav};