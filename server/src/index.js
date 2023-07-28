const app = require("./app");
require('dotenv').config();
const {PORT} = process.env;
const { conn } = require('./DB_connection');

conn.sync({ alter:true })//force false para produccion - alter:true actualiza los cambios sin borrar / force: true borra cada vez que se inicia el servidor
.then(() => { 
  console.log("Conexion a la base de datos establecida");
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
})
.catch((err) => {
  console.log(err);
})


/* const http = require("http");
//const fs = require("fs");
const {getCharById} = require('./controllers/getCharById')

const app = http
  .createapp((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("URL:", req.url);
      
    if (req.url.startsWith("/rickandmorty/character/")) {
      let id = Number(req.url.split("/")[3]);
      getCharById(res, id); // la handleSuccess y handle Error lo da esta función
    }else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Error 404: archivo no encontrado " + req.url);
    }
  })
  .listen(3001, "localhost");/// para node 18+ quitar el localhost

//module.exports = app ;
 */
