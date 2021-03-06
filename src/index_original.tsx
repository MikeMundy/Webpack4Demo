import * as _ from "lodash";
import "./index.css";
import "./index.scss";
import "./sample.png";
import * as dogs from "./dogs.xml";
import * as cats from "./cats.csv";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./Hello";

// const x = 10;
// alert('Hi from Typescript!!!!');

function component() {
    var element = document.createElement('div');

    var text = _.join(['Hello', 'from', 'webpack, compiling Typescript!!!!'], ' ');

    text += "<br>";

    text += JSON.stringify(dogs);

    text += "<br>";
    
    text += JSON.stringify(cats);

    element.innerHTML = text;

    return element;
}

document.body.appendChild(component());

console.log(dogs);

var reactElement = document.createElement('div');
document.body.appendChild(reactElement);

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React!!" />,
    reactElement
);