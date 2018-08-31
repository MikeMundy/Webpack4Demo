import * as React from "react";

export interface ITextProps {
    text: string;
    updateText: (text: string) => any;
}

export interface ITextState {
    text: string;
}

export class Text extends React.Component<ITextProps, ITextState> {

    public constructor(props: ITextProps, context: any) {
        super(props, context);

        this.state = { text: this.props.text };
    }

    public componentDidUpdate(prevProps: ITextProps) {
        if(prevProps.text !== this.props.text) {
            this.setState({ text: this.props.text });
        }
    }

    public render() {

        const onChangeText = (e: any): void => {
            const text = e.target.value;
            this.setState({ text });
        }

        const onLogin = (e: any): void => {
            e.preventDefault();
            this.props.updateText(this.state.text);
        }

        return (
            <form>
                <div >
                    <h2>Text</h2>
                    <fieldset className="myForm">
                        <div>
                            <input type="text" name="text" aria-label="Text" placeholder="Text" value={this.state.text} onChange={onChangeText} /> 
                            <div>props.text = {this.props.text}</div>
                            <div>state.text = {this.state.text}</div>
                        </div>
                        <div>
                            <button onClick={onLogin}>Update Text</button>
                        </div>
                    </fieldset>
                </div>
            </form>
        );
    }

}
