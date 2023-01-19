import { createAction, props } from "@ngrx/store";
import { DataModel } from "src/app/core/models";


export const homePageInitialized = createAction(
    "[HomeComponent] Page Initialized"
);

export const feedsLoadSuccess = createAction(
    "[HomeEffects-DataService] Feeds Load Success",
    props<{ orgFeed: DataModel[], personalFeed: DataModel[] }>()
);

export const feedsLoadFailure = createAction(
    "[HomeEffects-DataService] Feeds Load Failure",
    props<{ error: any }>()
);
