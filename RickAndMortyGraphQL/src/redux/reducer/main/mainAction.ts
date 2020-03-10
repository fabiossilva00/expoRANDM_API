import {
    MainEnumTypes,
    MainActionTypes
} from './mainTypes'

export function changePages(pages: number): MainActionTypes {
    return {
        type: MainEnumTypes.CHANGE_COUNT,
        payload: pages
    }
}