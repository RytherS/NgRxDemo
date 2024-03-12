import { DataModel, User } from "src/app/core/models";

// This model will include *everything* needed in home.component.html
export interface HomeVM {
    loading: boolean,
    orgFeed: DataModel[],
    personalFeed: DataModel[],
    currentUser: User | null
}