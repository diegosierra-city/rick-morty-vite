export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const SESSION = 'SESSION'

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

export const session = (user) => {
 return {
  type: SESSION,
  payload: user
 }
}


