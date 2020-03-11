import Characters from '../../../models/Characters/Characters'

import {
    CharacterDetailsTypes,
    CharacterDetailsEnumTypes
} from './characterDetailsTypes'

export function showCharInScreen(details: Characters): CharacterDetailsTypes {
    return {
        type: CharacterDetailsEnumTypes.SHOW_CHAR,
        payload: details
    }
}