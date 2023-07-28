const {Favorite} = require('../DB_connection');

async function allFav(req,res){
 try {
  let listFav = await Favorite.findAll()
  if (listFav === null) {
   return res.status(404).send('No existe el personaje')
  } 
  
  return res.status(201).json(listFav) 
 } catch (error) {
  throw new Error(error)
 
 }


}

module.exports = {allFav};