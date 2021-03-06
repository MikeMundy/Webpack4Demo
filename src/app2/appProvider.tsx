import * as React from "react";
import { Provider } from "react-redux";

import configureStore from "./store";

import { App } from "./app";

export class AppProvider extends React.Component<any, any> {

    private store: any;

    constructor(props: any, context: any) {
        super(props, context);
        this.store = configureStore();
    }

    public render() {
        return (
            <Provider store={this.store}>
                <App />
            </Provider>
        )
    }
}
