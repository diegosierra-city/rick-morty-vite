export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
export const ALL_FAV = 'ALL_FAV'

import axios from 'axios'

/* 
/// solo con redux
export const addFav = (character) => {
 return {
  type: ADD_FAV,
  payload: character
 }
} */

/// redux y express
export const addFav = (character) => {
return async (dispatch) => {
   try {
     let esponse = await  axios.post('http://localhost:3001/rickandmorty/fav', character)
     let data = esponse.data
     return dispatch({
      type: 'ADD_FAV',
      payload: data,
   });

   } catch (error) {
     console.log 
   }
   
 };
};

/*
//solo redux
export const removeFav = (id) => {
 return {
  type: REMOVE_FAV,
  payload: id
 }
} */

/// redux y express
export const removeFav = (id) => {
   return async (dispatch) => {
      try {
         let response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
         let data = response.data
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
      }catch (error) {
         console.log(error)
      }
     
   };

 /* return (dispatch) => {
    axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`).then(({ data }) => {
       return dispatch({
          type: 'REMOVE_FAV',
          payload: data,
    });
    });
 }; */
};

/// redux y express
export const allFav = () => {
 return (dispatch) => {
    axios.get(`http://localhost:3001/rickandmorty/fav`).then(({ data }) => {
       return dispatch({
          type: 'ALL_FAV',
          payload: data,
    });
    });
 };
};


export const filter = (gender) => {
 return {
  type: FILTER,
  payload: gender
 }
}

export const order = (sentido) => {
 return {
  type: ORDER,
  payload: sentido
 }
}
