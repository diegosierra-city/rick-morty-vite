import {ADD_FAV,REMOVE_FAV} from './actions'

const initialState = {
    myFavorites:[] 
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
         //console.log('h',state.myFavorites)
            return {
                ...state,
                myFavorites:[...state.myFavorites,action.payload]
            }

        case REMOVE_FAV:
         //console.log('X',state.myFavorites.myFavorites)
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== Number(action.payload))
            }
        
        default:
            return {...state}
    }
}