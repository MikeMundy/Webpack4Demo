import * as React from "react";

export interface ILogoutProps {
    logoutUser: () => any;
}

export interface ILogoutState {
}

export class Logout extends React.Component<ILogoutProps, ILogoutState> {

    public constructor(props: ILogoutProps, context: any) {
        super(props, context);
    }

    public render() {

        const onLogout = (e: any): any => {
            e.preventDefault();
            this.props.logoutUser();
        }

        return (
            <button onClick={onLogout} >Log out</button>
        );
    }

}
