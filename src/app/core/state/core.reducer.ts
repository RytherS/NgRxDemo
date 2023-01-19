import { ActionReducerMap } from "@ngrx/store";
import { CoreState } from "./core.state";
import { userReducer } from "./user/user.reducer";
import { errorReducer } from "./error/error.reducer";

export const coreReducer: ActionReducerMap<CoreState> = {
    userState: userReducer,
    errorState: errorReducer,
}
