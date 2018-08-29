import * as React from "react";
import { connect } from "react-redux";

import { IState } from "../state";

import { registerUserAction } from "../appDuck";

import { Register } from "./Register";

export class RegisterContainer extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Register registerUser={this.props.registerUser} />
        );
    }

}

const mapStateToProps = (state: IState, ownProps: any) => { // 'state' is the state in our Redux Store; 'ownProps' is a reference to this component's own this.props.
    return {
        //user: state.user,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        registerUser: (userName: string, password: string) => {
            dispatch(registerUserAction(userName, password));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);