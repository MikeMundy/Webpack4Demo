import "./app/style.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppProvider } from "./app/AppProvider";

var reactElement = document.createElement('div');
document.body.appendChild(reactElement);

ReactDOM.render(
    <AppProvider />,
    reactElement
);