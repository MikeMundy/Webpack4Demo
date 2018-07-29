import * as React from "react";
import { connect } from "react-redux";

import { IState } from "./state";

import { WidgetList } from "./WidgetList";

import { IWidget } from "./widgetType";

import { createWidgetAction } from "./widgetDuck";

// export interface IWidgetContainerProps {
//     widgets: IWidget[],
//     createWidget: (widget:IWidget) => any;
// }

export class WidgetContainer extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div>
                <WidgetList widgets={this.props.widgets} createWidget={this.props.createWidget} />
            </div>
        );
    }

}

const mapStateToProps = (state: IState, ownProps: any) => { // 'state' is the state in our Redux Store; 'ownProps' is a reference to this component's own this.props.
    return {
        widgets: state.widgets,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        createWidget: (widget: IWidget) => {
            dispatch(createWidgetAction(widget));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);