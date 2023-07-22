//const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharacter = async (res, id) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    let data = response.data;
    if (data.name) {
      let newCharacter = {
        id: +id,
        name: data.name,
        status: data.status,
        species: data.species,
        gender: data.gender,
        image: data.image,
        origin: data.origin,
      };

      return res.status(200).json(newCharacter);
    }
    return res.status(404).send("Not fount"); //error de la api //No esta entrando
  } catch (error) {
    return res.status(500).send(error.message); ///error del servidor
  }
};

module.exports = {
  getCharacter,
};
