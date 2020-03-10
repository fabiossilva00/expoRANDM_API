import {
    MainActionTypes,
    MainEnumTypes,
    MainState
} from './mainTypes'

const initialState: MainState = {
    pages: 1
}

export function mainReducer(state = initialState, action: MainActionTypes): MainState {
    switch (action.type) {
        case MainEnumTypes.CHANGE_COUNT: 
            return {
                ...state,
                pages: action.payload
            }
        default: 
            return state
    }
}