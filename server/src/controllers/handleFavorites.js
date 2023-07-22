let myFavorites = []

const postFav = (req, res) => {
let newCharacter = req.body
myFavorites.push(newCharacter)
return res.status(200).json(myFavorites)//newCharacter

}

const deleteFav = (req, res) => {
 let {id} = req.params
 let cantidadInicial= myFavorites.length
 myFavorites = myFavorites.filter(character => character.id !== id)
 return cantidadInicial === myFavorites.length? res.status(404).text(myFavorites) : res.status(200).json(myFavorites)

 }

const allFav = (req, res) => {
 return res.status(200).json(myFavorites)
 } 

 module.exports = {
    postFav,
    deleteFav,
    allFav
 }