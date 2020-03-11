import apolloClient from '../apolloClient'

import { allCharactersWithPages } from '../querys/charactersQuery'

import { createNewPageControl } from '../../models/PageControl'
import Characters, { createNewCharacter } from '../../models/Characters/Characters'
import ResponseHandler from '../../models/Requests/Response'
import { ResponseAllCharactersAndPages } from '../../models/Requests/ResponseCharactersPage'

export async function getAllCharactersPerPage(page: number) {
    try {
        const response = await apolloClient.query({
            query: allCharactersWithPages,
            variables: {
                page: page
            }
        })
        const handler = _handlerAllCharacterPerPage(response)
        return handler
    } catch (err) {
        console.log(err)
        return new ResponseHandler<null, string>(null, "Deu Errado Cara")
    }
}

function _handlerAllCharacterPerPage(response: any): ResponseHandler<ResponseAllCharactersAndPages | null, string | null> {
    if (typeof response === 'object') {
        const { characters: {info, results} } = response.data
        if (results != null) {
            const paginas = createNewPageControl(info)

            const personagens: Characters[] = results.map(createNewCharacter)
            const respostaFinal = {
                characters: personagens,
                pages: paginas
            }
            
            return new ResponseHandler<ResponseAllCharactersAndPages, null>(respostaFinal , null)
        }
        return new ResponseHandler(null, "Deu erro na requisição")
    }
    return new ResponseHandler(null, "Deu erro na requisição")
}
