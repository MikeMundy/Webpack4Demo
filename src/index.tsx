import "./main.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { WidgetProvider } from "./widget/widgetProvider";

var reactElement = document.createElement('div');
document.body.appendChild(reactElement);

ReactDOM.render(
    <div>
        <WidgetProvider/>
    </div>,
    reactElement
);