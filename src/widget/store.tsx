import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

import { IState } from "./state";
import reducer from "./widgetDuck";

import { IWidget } from "./widgetType";

const widget1: IWidget = { id: 1, name: "Widget 1" }

const defState: IState = { widgets: [widget1] }

export default function configureStore(initialState: IState = defState): any {
    return createStore(
        reducer,
        initialState,
        devToolsEnhancer({}),
    );
};
