import * as React from "react";

import { IWidget } from "./widgetType";

export interface IWidgetProps {
    widgets: IWidget[];
    createWidget: (widget: IWidget) => any;
}

export class WidgetList extends React.Component<IWidgetProps, any> {

    public constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            name: "My Widget",
        }
    }

    public render() {

        const createWidget = () => {
            let newWidget: IWidget = { id: 0, name: this.state.name };
            this.props.createWidget(newWidget)
        }

        const items: JSX.Element[] = [];
        for (const w of this.props.widgets) {
            items.push(<li key={w.id}>{w.id}: {w.name}</li>)
        }

        const onNameChange = (e: any): void => {
            const name = e.target.value;
            this.setState({ name });
        }

        return (
            <React.Fragment>
                <div>
                    <input type="text" value={this.state.name} onChange={onNameChange} />
                    <button onClick={createWidget}>Create Widget</button>
                </div>
                <div>
                    <ul>
                        {items}
                    </ul>
                </div>
            </React.Fragment>
        );
    }


}
