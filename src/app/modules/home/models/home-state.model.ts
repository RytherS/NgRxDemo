import { DataModel } from "src/app/core/models";


export interface HomeState {
    loading: boolean,
    orgFeed: DataModel[];
    personalFeed: DataModel[];
}

export const initialHomeState: HomeState = {
    loading: false,
    orgFeed: [],
    personalFeed: []
}