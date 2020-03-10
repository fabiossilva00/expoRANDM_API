export interface CharactersPage {
    count: number
    pages: number
    next: number
    prev: number | null
}

class PageControl {
    count   :   number
    pages   :   number
    next    :   number
    prev    :   number | null
    constructor(pageInfos: CharactersPage) {
        this.count = pageInfos.count
        this.pages = pageInfos.pages
        this.next = pageInfos.next
        this.prev = pageInfos.prev
    }
}

export function createNewPageControl(pages: CharactersPage): PageControl {
    return new PageControl(pages)
}

export default  PageControl