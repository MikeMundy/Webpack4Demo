import * as React from "react";
import { connect } from "react-redux";

import { IState } from "./state";

import { AppRouter } from "./AppRouter";

class AppRouterContainer extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        console.log("AppRouter constructor");
        super(props, context);
    }

    public render() {
        return (
            <AppRouter user={this.props.user}/>
        );
    }

}

const mapStateToProps = (state: IState, ownProps: any) => { // 'state' is the state in our Redux Store; 'ownProps' is a reference to this component's own this.props.
    console.log("user in state:" + JSON.stringify(state.user));
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouterContainer);