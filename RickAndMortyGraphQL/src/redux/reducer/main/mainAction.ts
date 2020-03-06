import {
    MainEnumTypes,
    MainActionTypes
} from './mainTypes'

export function changeCount(count: number): MainActionTypes {
    return {
        type: MainEnumTypes.CHANGE_COUNT,
        payload: count
    }
}