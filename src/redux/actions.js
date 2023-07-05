export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

export const addFav = (character) => {
 return {
  type: ADD_FAV,
  payload: character
 }
}

export const removeFav = (id) => {
 return {
  type: REMOVE_FAV,
  payload: id
 }
}

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
