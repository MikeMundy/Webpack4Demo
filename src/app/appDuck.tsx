import { defaultState, IState } from "./state";
import { IUser } from "./user";

import { AnyAction, Reducer } from "redux";

// Actions
const USER_UPDATE = 'my-app/user/UPDATE';
const USER_AUTHENTICATE = 'my-app/user/AUTHENTICATE';
const USER_REGISTER = 'my-app/user/REGISTER';
const USER_LOGOUT = 'my-app/user/LOGOUT';

// Action Creators
export function updateUserAction(user: IUser): AnyAction {
  return { type: USER_UPDATE, user };
}

export function authenticateUserAction(userName: string, password: string): AnyAction {
  return { type: USER_AUTHENTICATE, userName, password };
}

export function logoutUserAction(): AnyAction {
  return { type: USER_LOGOUT };
}

export function registerUserAction(userName: string, password: string): AnyAction {
  return { type: USER_REGISTER, userName, password };
}

// Reducer
// export type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S;

let reducer: Reducer;

export default reducer = (state: IState = defaultState, action: AnyAction): IState => {

  switch (action.type) {

    case USER_UPDATE: {
      const user: IUser = action.user;
      return { ...state, user };
    }

    case USER_AUTHENTICATE: {
      // Will need to do an ansych operation here...
      const user: IUser = {
        userName: action.userName,
        isLoggedIn: true,
      }
      return { ...state, user };
    }

    case USER_REGISTER: {
      const user: IUser = {
        userName: action.userName,
        isLoggedIn: true,
      }
      return { ...state, user };
    }

    case USER_LOGOUT: {
      // Will need to do an ansych operation here...
      const user: IUser = {
        userName: "",
        isLoggedIn: false,
      }
      return { ...state, user };
    }    

    default: return state;
  }
}

// Selectors
// const getMaxId = (widgets: IWidget[]): number => { return widgets.length };

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }