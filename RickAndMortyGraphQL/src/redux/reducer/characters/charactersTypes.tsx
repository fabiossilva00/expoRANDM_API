import Characters from '../../../models/Characters/Characters'

export enum CharactersEnumTypes {
    ADD_CHARS = "UPDATE_CHARS"
}

export interface CharactersState {
    characters: Characters[]
}

interface UpdateCharacters {
    type: typeof CharactersEnumTypes.ADD_CHARS
    payload: Characters[]
}

export type CharactersTypes = UpdateCharacters