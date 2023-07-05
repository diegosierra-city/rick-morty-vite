import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      //console.log('h',state.myFavorites)
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      //console.log('X',state.myFavorites.myFavorites)
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== Number(action.payload)
        ),
      };

    case FILTER:
      let newFavotites = [];
      if (action.payload == "todos") {
        newFavotites = [...state.allCharacters];
      } else {
        newFavotites = state.allCharacters.filter(
          (fav) => fav.gender === action.payload
        );
      }
      return {
        ...state,
        myFavorites: newFavotites,
      };

    case ORDER:
      // Creamos una copia del array original
      const objetosOrdenados = [...state.allCharacters];

      // Utilizamos la función sort para ordenar la copia del array por la propiedad "name"
      if (action.payload == "A") {
        objetosOrdenados.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload == "D") {
        objetosOrdenados.sort((a, b) => {
          if (a.name < b.name) {
            return 1; // Devolvemos 1 en lugar de -1
          }
          if (a.name > b.name) {
            return -1; // Devolvemos -1 en lugar de 1
          }
          return 0;
        });
      }

      return {
        ...state,
        myFavorites: [...objetosOrdenados],
      };

    default:
      return { ...state };
  }
}
