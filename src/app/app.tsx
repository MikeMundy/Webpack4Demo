import * as React from "react";

import LoginContainer from "./userManagement/loginContainer";
import RegisterContainer from "./userManagement/registerContainer";
import UserDetailsContainer from "./userManagement/userDetailsContainer";

export interface IAppProps {};

export const App: React.SFC<IAppProps> = (props) => {
    return (
        <div>
            <h1>App</h1>
            <LoginContainer />
            <RegisterContainer />
            <UserDetailsContainer />
        </div>
    );
}
