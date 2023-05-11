
import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from './actions'

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV: return {
            ...state,
            allCharacters: [...state.allCharacters, action.payload],
            myFavorites: [...state.allCharacters, action.payload]
        }
        case REMOVE_FAV: return {
            ...state,
            allCharacters: [...state.allCharacters.filter((character) => character?.id !== +action.payload)],
            myFavorites: [...state.allCharacters.filter((character) => character?.id !== +action.payload)]
        }
        case FILTER: return {
            ...state,
            myFavorites: action.payload === 'All' ? [...state.allCharacters] : [...state.allCharacters.filter((character) => character.gender === action.payload)]
        }
        case ORDER: return {
            ...state,
            myFavorites: action.payload === 'A' ? [...state.allCharacters.sort((a, b) => a.id - b.id)] :
                [...state.allCharacters.sort((a, b) => b.id - a.id)]
        }
        default: return state
    }
}