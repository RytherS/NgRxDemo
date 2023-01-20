import { createReducer, on } from "@ngrx/store";
import { initialUserState } from './user.state';
import { UserActions } from ".";


export const userReducer = createReducer(
    initialUserState,
    on(
        UserActions.loginPageUserLoginClicked,
        UserActions.headerUserLoginClicked,
        (state) => {
            return { ...state, loading: true };
        }
    ),

    on(
        UserActions.userLoadSuccess,
        (state, actionData) => {
            return { ...state, loading: false, currentUser: actionData.user };
        }
    ),

    on(
        UserActions.userLoadFailure,
        (state) => {
            return { ...state, loading: false, currentUser: undefined };
        }
    )
);
