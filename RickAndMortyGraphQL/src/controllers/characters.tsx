import { addCharacters } from '../redux/reducer/characters/charactersAction'
import { changePages } from '../redux/reducer/main/mainAction'

import { getAllCharactersPerPage } from '../services/requests/charactersRequest'

export function addCharactersInRedux(page: number) {
    return async (dispatch: any) => {
        const { success, failure } = await getAllCharactersPerPage(page)
        if (success != null) {
            const { characters } = success
            dispatch(addCharacters(characters))
            dispatch(changePages(page))
        }
    }
}

