import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { IState } from "../state";

import { logoutUserAction } from "../appDuck";

import { Logout } from "./Logout";

class LogoutContainer extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Logout logoutUser={this.props.logoutUser} />
        );
    }

}

const mapStateToProps = (state: IState, ownProps: any) => { // 'state' is the state in our Redux Store; 'ownProps' is a reference to this component's own this.props.
    return {
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        logoutUser: () => {
            dispatch(logoutUserAction());
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutContainer));