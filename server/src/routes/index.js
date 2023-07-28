const { getCharacter } = require('../controllers/getCharacter');
const {login} = require('../controllers/login');
const {postUser} = require('../controllers/postUser');
const {postFav} = require('../controllers/postFav');
const {deleteFav} = require('../controllers/deleteFav');
const {allFav} = require('../controllers/allFav');

const router = require('express').Router();

router.get("/character/:id", (req, res) => {
 let id = req.params.id;
 getCharacter(res, id); // la handleSuccess y handle Error lo da esta función
});

router.get("/login", async (req, res) => await login(req, res));

router.post("/login", async (req, res) => await postUser(req, res));

router.post("/fav", async(req, res) => await postFav(req, res));

router.get("/fav", async(req, res) => await allFav(req, res));

router.delete("/fav/:id", async(req, res) => await deleteFav(req, res));


/* router.post("/login", async (req, res) => {
 try {
  const newUser = await login(req, res)
 return res.json(newUser)
 } catch (error) {
  return res.status(500).json(error)
 }
 }); */



/* router.post("/fav", async(req, res) => {
 try {
  const newUser = await postFav(req, res)
 return res.json(newUser)
 } catch (error) {
  return res.status(500).json(error)
 }
 }); */
 
  /* router.get("/fav", async(req, res) => {
 try {
  const newUser = await allFav(req, res)
 return res.json(newUser)
 } catch (error) {
  return res.status(500).json(error)
 }
 }); */
 
/* router.get("/fav", async(req, res) => {
 try {
  const newUser = await allFav(req, res)
 return res.json(newUser)
 } catch (error) {
  return res.status(500).json(error)
 }
 }); */ 

/* router.delete("/fav/:id", async (req, res) => {
try {
  const deleteF = await deleteFav(req, res)
 return res.json(deleteF)
 } catch (error) {
  return res.status(500).json(error)
 }
 }); */


 module.exports = router /// sin llaves