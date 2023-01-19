import { createAction, props } from "@ngrx/store";
import { User } from "../../models";

// This action should not be referenced in the reducer.
// Simply used as a way for effects to return an action without impacting state
export const NO_ACTION = createAction(
    "[USER_NO_ACTION]"
);

export const loginPageUserLoginClicked = createAction(
    "[Login] User Login Clicked"
);

export const headerUserLoginClicked = createAction(
    "[Header] User Login Clicked"
);

export const userLoadSuccess = createAction(
    "[User Effects-User Service] User Load Success",
    props<{ user: User }>()
);

export const userLoadFailure = createAction(
    "[User Effects-User Service] User Load Failure",
    props<{ error: any }>()
);
