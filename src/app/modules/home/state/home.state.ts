import { DataModel } from "src/app/core/models";


export const HOME_FEATURE_KEY = "home";

// Could also use ngrx/entity here for "post" DataModel entities!
// https://ngrx.io/guide/entity
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
