import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { defaultState, IState } from "./state";
import reducer from "./appDuck";

export default function configureStore(initialState: IState = defaultState): any {
    return createStore(
        reducer,
        initialState,
        devToolsEnhancer({}),
    );
};
