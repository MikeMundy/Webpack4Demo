import * as React from "react";
import { connect } from "react-redux";

import { IState } from "./state";

import { updateTextAction } from "./appDuck";

import { Text } from "./Text";

export class TextContainer extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div>
                textContainer text = {this.props.text}    
                <Text text={this.props.text} updateText={this.props.updateText} />
            </div>
        );
    }

}

const mapStateToProps = (state: IState, ownProps: any) => { // 'state' is the state in our Redux Store; 'ownProps' is a reference to this component's own this.props.
    return {
        text: state.text,
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        updateText: (text: string) => {
            dispatch(updateTextAction(text));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextContainer);