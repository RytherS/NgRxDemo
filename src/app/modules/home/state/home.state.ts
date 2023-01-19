import { DataModel } from "src/app/core/models";


export const HOME_FEATURE_KEY = "home";

export interface HomeState {
    loading: boolean,
    orgFeed: DataModel[];
    personalFeed: DataModel[];
}

// USE ENTITY HERE?
export const initialHomeState: HomeState = {
    loading: false,
    orgFeed: [],
    personalFeed: []
}
