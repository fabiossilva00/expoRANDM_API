import Characters from '../Characters/Characters'
import PageControl from '../PageControl'

export interface ResponseAllCharactersAndPages {
    characters: Characters[]
    pages: PageControl
}