import { createAction, props } from "@ngrx/store";
import { User } from "../../models";


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
