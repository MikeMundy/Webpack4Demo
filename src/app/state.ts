import { IUser } from "./user";

export interface IState {
    user: IUser;
}

export const defaultState: IState = {
    user: {
        userName: "",
        isLoggedIn: false,
    }
}