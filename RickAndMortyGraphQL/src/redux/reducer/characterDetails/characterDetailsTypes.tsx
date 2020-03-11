import Characters from '../../../models/Characters/Characters'

export enum CharacterDetailsEnumTypes {
    SHOW_CHAR = "SHOW_CHAR"
}

export interface CharacterDetailState {
    details: Characters | null
}

interface ShowCharInScreen {
    type: typeof CharacterDetailsEnumTypes.SHOW_CHAR
    payload: Characters
}

export type CharacterDetailsTypes = ShowCharInScreen