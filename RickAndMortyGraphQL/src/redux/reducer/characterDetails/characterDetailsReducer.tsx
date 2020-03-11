import {
    CharacterDetailState,
    CharacterDetailsEnumTypes,
    CharacterDetailsTypes
} from './characterDetailsTypes'

const initialState: CharacterDetailState = {
    details: null
}

export function characterDetailsReducer(state = initialState, action: CharacterDetailsTypes) {
    switch (action.type) {
        case CharacterDetailsEnumTypes.SHOW_CHAR:
            return {
                details: action.payload
            }
        default: 
            return state
    }
}