import "./main.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { WidgetProvider } from "./widget/widgetProvider";

import { RoutingExample } from "./routing/RoutingExample";

var reactElement = document.createElement('div');
document.body.appendChild(reactElement);

ReactDOM.render(
    <div>
        <WidgetProvider />
        <BrowserRouter>
            <RoutingExample title="Character Classes" />
        </BrowserRouter>
    </div>,
    reactElement
);