// widgets.js
import { IWidget } from "./widgetType";

import { defaultState, IState } from "./state";

import { AnyAction, Reducer } from "redux";

// Actions
const CREATE = 'my-app/widgets/CREATE';

// Action Creators
export function createWidgetAction(widget: IWidget): AnyAction {
  return { type: CREATE, widget };
}

// Reducer
// export type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S;

let reducer: Reducer;
export default reducer = (state: IState = defaultState, action: AnyAction): IState => {
  switch (action.type) {
    // do reducer stuff
    case CREATE: {
      const newWidgets = [...state.widgets];
      newWidgets.push(action.widget);
      const newState: IState = { ...state, widgets: newWidgets };
      return newState;
  }
    default: return state;
}
}



// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }