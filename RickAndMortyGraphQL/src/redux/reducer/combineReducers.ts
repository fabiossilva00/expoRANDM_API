import { combineReducers } from 'redux'

import { mainReducer } from './main/mainReducer'
import { MainState } from './main/mainTypes'

import { charactersReducer } from './characters/charactersReducer'
import { CharactersState } from './characters/charactersTypes'

const rootReducers = combineReducers({
    MainReducer: mainReducer,
    CharacterReducer: charactersReducer
})

export interface RootReducers {
    MainReducer: MainState
    CharacterReducer: CharactersState
}

export default rootReducers