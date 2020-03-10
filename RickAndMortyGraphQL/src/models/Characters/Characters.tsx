import { LocationCharacter } from './Location'
import { OriginCharacter } from './Origin'

import OriginChar from './Origin'
import LocationChar from './Location'

export interface CharacterDetails {
    id: number
    name: string
    status: string
    species: string
    gender: string
    image:  string
    origin: OriginCharacter
    location: LocationCharacter
}

class Characters {
    id: number
    name: string
    status: string
    species: string
    gender: string
    image: string
    origin: OriginChar
    location: LocationChar

    constructor(charInfos: CharacterDetails) {
        this.id = charInfos.id
        this.name = charInfos.name
        this.status = charInfos.status
        this.species = charInfos.species
        this.gender = charInfos.gender
        this.image = charInfos.image
        this.origin = new OriginChar(charInfos.origin)
        this.location = new LocationChar(charInfos.location)
    }
}

export function createNewCharacter(character: CharacterDetails): Characters {
    return new Characters(character)
}

export default Characters