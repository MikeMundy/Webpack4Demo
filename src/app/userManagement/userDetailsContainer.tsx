import * as React from "react";
import { connect } from "react-redux";

import { IState } from "../state";

import { UserDetails } from "./UserDetails";

export class UserDetailsContainer extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <UserDetails user={this.props.user} />
        );
    }

}

const mapStateToProps = (state: IState, ownProps: any) => { // 'state' is the state in our Redux Store; 'ownProps' is a reference to this component's own this.props.
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsContainer);