import { IUser } from "./user";

export interface IState {
    user: IUser;
}

export const defaultState: IState = {
    user: {
        userName: "Default Username",
        isLoggedIn: false,
    }
}