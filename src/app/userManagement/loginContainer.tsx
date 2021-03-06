import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { IState } from "../state";

import { authenticateUserAction } from "../appDuck";

import { Login } from "./Login";

class LoginContainer extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Login isLoggedIn={this.props.isLoggedIn} authenticateUser={this.props.authenticateUser} />
        );
    }

}

const mapStateToProps = (state: IState, ownProps: any) => { // 'state' is the state in our Redux Store; 'ownProps' is a reference to this component's own this.props.
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        authenticateUser: (userName: string, password: string) => {
            dispatch(authenticateUserAction(userName, password));
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));