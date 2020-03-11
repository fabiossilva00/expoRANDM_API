import { combineReducers } from 'redux'

import { mainReducer } from './main/mainReducer'
import { MainState } from './main/mainTypes'

import { charactersReducer } from './characters/charactersReducer'
import { CharactersState } from './characters/charactersTypes'

import { characterDetailsReducer } from './characterDetails/characterDetailsReducer'
import { CharacterDetailState } from './characterDetails/characterDetailsTypes'

const rootReducers = combineReducers({
    MainReducer: mainReducer,
    CharacterReducer: charactersReducer,
    CharacterDetailsReducer: characterDetailsReducer
})

export interface RootReducers {
    MainReducer: MainState
    CharacterReducer: CharactersState
    CharacterDetailsReducer: CharacterDetailState
}

export default rootReducers