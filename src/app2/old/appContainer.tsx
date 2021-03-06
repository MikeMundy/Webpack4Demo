import * as React from "react";
import { connect } from "react-redux";

import { IState } from "../state";

import { App } from "../app";

// export interface IWidgetContainerProps {
//     widgets: IWidget[],
//     createWidget: (widget:IWidget) => any;
// }

export class AppContainer extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div>
                
                <h1>App Container</h1>
                <App />

            </div>
        );
    }

}

const mapStateToProps = (state: IState, ownProps: any) => { // 'state' is the state in our Redux Store; 'ownProps' is a reference to this component's own this.props.
    return {
        text: state.text,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // updateUser: (user: IUser) => {
        //     dispatch(updateUserAction(user));
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);