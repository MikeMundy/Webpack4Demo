import * as React from "react";
import { connect } from "react-redux";

import { IState } from "../state";

import { authenticateUserAction } from "../appDuck";

import { Login } from "./Login";

export class LoginContainer extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Login authenticateUser={this.props.authenticateUser} />
        );
    }

}

const mapStateToProps = (state: IState, ownProps: any) => { // 'state' is the state in our Redux Store; 'ownProps' is a reference to this component's own this.props.
    return {};
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        authenticateUser: (userName: string, password: string) => {
            dispatch(authenticateUserAction(userName, password));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);