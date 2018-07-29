import * as React from "react";
import { Provider } from "react-redux";

import configureStore from "./store";

import WidgetContainer from "./WidgetContainer";

export class WidgetProvider extends React.Component<any, any> {

    private store: any;

    constructor(props: any, context: any) {
        super(props, context);
        this.store = configureStore();
    }

    public render() {
        return (
            <Provider store={this.store}>
                <WidgetContainer />
            </Provider>
        )
    }
}
