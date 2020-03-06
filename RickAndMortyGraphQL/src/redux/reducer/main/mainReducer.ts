import {
    MainActionTypes,
    MainEnumTypes,
    MainState
} from './mainTypes'

const initialState: MainState = {
    count: 0
}

export function mainReducer(state = initialState, action: MainActionTypes): MainState {
    switch (action.type) {
        case MainEnumTypes.CHANGE_COUNT: 
            return {
                ...state,
                count: action.payload
            }
        default: 
            return state
    }
}