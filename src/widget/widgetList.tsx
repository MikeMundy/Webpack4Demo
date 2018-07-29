import * as React from "react";

import { IWidget } from "./widgetType";

export interface IWidgetProps {
    widgets: IWidget[];
    createWidget: (widget: IWidget) => any;
}

export const WidgetList = (props: IWidgetProps) => {

    const createWidget = () => {
        const d = new Date();
        const id = d.getTime();
        let newWidget: IWidget = { id, name: "A Widget" };
        props.createWidget(newWidget)
    }

    // const listItems = props.widgets.map((w: IWidget) => {
    //     return (<li key={w.id}>{w.id}: {w.name}</li>);
    // });

    // const listItems = props.widgets.map<IWidget>(w => <li key={w.id}>{w.name}</li>) ;

    const items: JSX.Element[] = [];
    for(const w of props.widgets) {
        items.push(<li key={w.id}>{w.id}: {w.name}</li>)
    }

    return (
        <React.Fragment>
            <ul>
                {items}
            </ul>
            <button onClick={createWidget}>Create Widget</button>
        </React.Fragment>
    );
}
