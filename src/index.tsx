import "./main.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { WidgetProvider } from "./widget/widgetProvider";

import { RoutingExample } from "./routing/RoutingExample";

import { CharGenChecklist } from "./SWN/CharGenChecklist";

var reactElement = document.createElement('div');
document.body.appendChild(reactElement);

ReactDOM.render(
    <div>
        <BrowserRouter>
            <React.Fragment>
                <WidgetProvider />
                <RoutingExample title="Character Classes" />
                <CharGenChecklist/>
            </React.Fragment>
        </BrowserRouter>
    </div>,
    reactElement
);