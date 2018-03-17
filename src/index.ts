import * as _ from "lodash";

// const x = 10;
// alert('Hi from Typescript!!!!');

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'from', 'webpack, compiling Typescript!!!!'], ' ');

    return element;
}

document.body.appendChild(component());