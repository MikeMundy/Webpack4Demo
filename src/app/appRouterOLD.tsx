import * as React from "react";
import { BrowserRouter } from "react-router-dom";

// import { App } from "./app";

export interface IAppRouterProps { };

export const AppRouterOLD: React.SFC<IAppRouterProps> = (props) => {
    return (
        <BrowserRouter>
            {/*<Route path="/:filter?" component={App} />*/}
        </BrowserRouter>
    );
}