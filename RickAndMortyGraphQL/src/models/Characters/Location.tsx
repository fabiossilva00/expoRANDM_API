export interface LocationCharacter {
    id: number
    name: string
    dimension: string
}

class LocationChar {
    id: number
    name: string
    dimension: string

    constructor(locationInfo: LocationCharacter) {
        this.id = locationInfo.id
        this.name = locationInfo.name
        this.dimension = locationInfo.dimension
    }
}

export default LocationChar