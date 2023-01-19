import { User } from "../../models";


export interface UserState {
    currentUser?: User,
    loading: boolean
}

export const initialUserState: UserState = {
    currentUser: undefined,
    loading: false
}
