import {
    CharactersEnumTypes,
    CharactersState,
    CharactersTypes
} from './charactersTypes'

const initialState: CharactersState = {
    characters: []
}

export function charactersReducer(state = initialState, action: CharactersTypes) {
    switch(action.type) {
        case CharactersEnumTypes.ADD_CHARS: 
        const { characters } = state
            return {
                ...state,
                characters: [...characters, ...action.payload]
            }
        default:
            return state
    }
}