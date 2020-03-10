import Characters from '../../../models/Characters/Characters'
import {
    CharactersEnumTypes,
    CharactersTypes
} from './charactersTypes'

export function addCharacters(characters: Characters[]): CharactersTypes {
    return {
        type: CharactersEnumTypes.ADD_CHARS,
        payload: characters
    }
}
