export interface OriginCharacter {
    id: number | null
    name: string
    dimension: string | null
}

class OriginChar {
    id: number | null
    name: string
    dimension: string | null
    constructor(originInfo: OriginCharacter) {
        this.id = originInfo.id
        this.name = originInfo.name
        this.dimension = originInfo.dimension
    }
}

export default OriginChar