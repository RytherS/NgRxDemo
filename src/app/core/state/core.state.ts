import { UserState } from "./user/user.state";
import { ErrorState } from "./error/error.state";

export const CORE_FEATURE_KEY = "core";

export interface CoreState {
    userState: UserState;
    errorState: ErrorState;
}
