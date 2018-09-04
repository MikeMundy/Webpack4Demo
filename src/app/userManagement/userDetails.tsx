import * as React from "react";

import { IUser } from "../user";

import LogoutContainer from "./logoutContainer";

export interface IUserDetailsProps {
    user: IUser;
}

export const UserDetails: React.SFC<IUserDetailsProps> = (props: IUserDetailsProps) => {
    return (
        <div >
            <h2>User Details</h2>
            <fieldset className="myForm">
                <div>
                    User Name: {props.user.userName}
                </div>
                <div>
                    Logged In: {props.user.isLoggedIn.toString()}
                </div>
                <div>
                    <LogoutContainer />
                </div>
            </fieldset>
        </div>
    );
}