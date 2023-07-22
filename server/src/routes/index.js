const { getCharacter } = require('../controllers/getCharacter');
const { login } = require('../controllers/login');
const {postFav, deleteFav, allFav} = require('../controllers/handleFavorites');

const router = require('express').Router();

router.get("/character/:id", (req, res) => {
 let id = req.params.id;
 getCharacter(res, id); // la handleSuccess y handle Error lo da esta función
});
router.get("/login/", (req, res) => {
// let claves = req.query;
//console.log('Clavesx',req.query)
 login(req.query, res)
 });

 //router.get("/login/",login) //otra forma

router.post("/fav", (req, res) => {
postFav(req, res)
 }); 

router.delete("/fav/:id", (req, res) => {
 deleteFav(req, res) 
 });

router.get("/fav", (req, res) => {
 allFav(req, res) 
 });

 module.exports = router /// sin llaves