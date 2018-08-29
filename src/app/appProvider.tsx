import * as React from "react";
import { Provider } from "react-redux";

import configureStore from "./store";

import AppContainer from "./AppContainer";

import LoginContainer from "./userManagement/loginContainer";

// import RegisterContainer from "./userManagement/registerContainer";

export class AppProvider extends React.Component<any, any> {

    private store: any;

    constructor(props: any, context: any) {
        super(props, context);
        this.store = configureStore();
    }

    public render() {
        return (
            <Provider store={this.store}>
                <div>
                    <h1>App Container</h1>
                    <AppContainer />

                    <h1>Login Container in AppProvider</h1>
                    <LoginContainer />

                    {/*<h1>Register Container in AppProvider</h1>
                    <RegisterContainer />*/}
                </div>
            </Provider>
        )
    }
}
