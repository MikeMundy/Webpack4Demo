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
      const newWidget: IWidget = action.widget;
      newWidget.id = getMaxId(state.widgets) + 1;
      return { ...state, widgets: [...state.widgets, newWidget] };
    }
    default: return state;
  }
}

// Selectors
const getMaxId = (widgets: IWidget[]): number => { return widgets.length };



// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }