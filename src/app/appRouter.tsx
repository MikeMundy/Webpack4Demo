import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { IUser } from "./user";

import { ConditionalRoute } from "./routing/conditionalRoute";

import LoginContainer from "./userManagement/loginContainer";
import RegisterContainer from "./userManagement/registerContainer";
import UserDetailsContainer from "./userManagement/userDetailsContainer";

import { NoMatch } from "./noMatch/noMatch";

export interface IAppRouterProps {
    user: IUser;
};

export const AppRouter: React.SFC<IAppRouterProps> = (props:IAppRouterProps) => {

    return (
        <div>
            <div>userName: {props.user.userName}</div>
            <div>isLoggedIn: {props.user.isLoggedIn.toString()}</div>            
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginContainer} />
                    <Route path="/register" component={RegisterContainer} />

                    <ConditionalRoute
                        path="/userDetails"
                        component={UserDetailsContainer}
                        routeCondition={props.user.isLoggedIn}
                        redirectTo="/login" />

                    <Route exact path="/" component={LoginContainer} />
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

// import * as React from "react";

/*import { IUser } from "./user";

export interface IProps {
    user: IUser;
}

export const AppRouter: React.SFC<IProps> = (props: IProps) => {
    return (
        <div >
            <h2>TEST - App Router User Details</h2>
            <fieldset className="myForm">
                <div>
                    User Name: {props.user.userName}
                </div>
                <div>
                    Logged In: {props.user.isLoggedIn.toString()}
                </div>                
            </fieldset>
        </div>
    );
}*/
