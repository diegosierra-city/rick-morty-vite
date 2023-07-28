const {Favorite} = require('../DB_connection');

async function deleteFav(req,res){
    
 try {
  const {id} = req.params
  if(!id) return res.status(401).send('Faltan datos')
  
  let trash =await Favorite.destroy({
   where: { 
     id: id
   },
   
 });
  //return res.status(201).send('Per'+trash)
  if (trash === 0) {
   return res.status(404).send('No existe el personaje')
  } 
  
  return res.status(201).send('Personaje borrado de favoritos') 
 } catch (error) {
  throw new Error(error)
 
 }


}

module.exports = {deleteFav};