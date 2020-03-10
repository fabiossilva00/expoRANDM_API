export enum MainEnumTypes {
    CHANGE_COUNT = "CHANGE_COUNT",
    CLEAN_COUNT = "CLEAN_COUNT"
}

export interface MainState {
    pages: number
}

interface ChangeCountAction {
    type: typeof MainEnumTypes.CHANGE_COUNT
    payload: number
}

export type MainActionTypes = ChangeCountAction