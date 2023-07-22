const app = require("./app");

app.listen(3001, () => console.log("Servidor corriendo en puerto 3001"));

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
