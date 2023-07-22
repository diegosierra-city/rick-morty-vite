const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
const [users] = require("../src/utils/users");
const { postFav } = require("../src/controllers/handleFavorites");

let character = {
  id: 26,
  name: "Rick Sanchez",
  species: "Human",
  gender: "Male",
  status: "Alive",
  origin: "Earth (C-137)",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};
let character2 = {
  id: 28,
  name: "Rick Sanchez",
  species: "Human",
  gender: "Male",
  status: "Alive",
  origin: "Earth (C-137)",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};


describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      // Verifica la existencia de propiedades específicas
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");

    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await agent.get("/rickandmorty/character/36po");
      expect(response.statusCode).toBe(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Se debe generar el acceso cuando las claves son correctas", async () => {
      const response = await agent.get(
        `/rickandmorty/login/?email=${users.email}&password=${users.password}`
      );
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ access: true }); //
    });

    it("Se debe generar un error cuando las claves son incorrectas", async () => {
      const response = await agent.get(
        `/rickandmorty/login/?email=nada@gmail.com&password=1456`
      );
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ access: false }); //
    });
  });

  

  describe("POST /rickandmorty/fav", () => {
    it("Debe guardar el elemento enviado por body en el arreglo de favoritos", async () => {
      const response = await agent.post(`/rickandmorty/fav`).send(character);
      expect(response.body).toContainEqual(character);
      //expect(response.body).toEqual({access: true}) //
    });
    it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
      const response = await agent.post(`/rickandmorty/fav`).send(character2);
      expect(response.body.length).toEqual(2);
      expect(response.body).toContainEqual(character);
      expect(response.body).toContainEqual(character2);
    });
  });

  ///siguiente

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("ID invalido no debe borrar nada", async () => {
      const response = await agent.delete(`/rickandmorty/fav/200hj`);
      expect(response.statusCode).toBe(404);
      expect('uno').toEqual(response.text) //
    });
    it("ID valido debe borrar el elemento de favoritos", async () => {
      const response = await agent.delete(`/rickandmorty/fav/28`);
      //expect(response.statusCode).toBe(200);
      expect(response.body.length).toEqual(response.body)
    });
  });
});
