import { defaultState, IState } from "./state";

import { AnyAction, Reducer } from "redux";

// Actions
const TEXT_UPDATE = 'my-app/text/UPDATE';

// Action Creators
export function updateTextAction(text: string): AnyAction {
  return { type: TEXT_UPDATE, text };
}

// Reducer
// export type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S;

let reducer: Reducer;

export default reducer = (state: IState = defaultState, action: AnyAction): IState => {

  switch (action.type) {

    case TEXT_UPDATE: {
      return { ...state, text: action.text };
    }

    default: return state;
  }
}
