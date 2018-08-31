import * as React from "react";

import TextContainer from "./textContainer";

import { App2 } from "./app2";

export interface IAppProps {
}

export interface IAppState {
}

export class App extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {

        return (
            <div>
                <h1>App</h1>

                <h4>TextContainer inside App #1 </h4>
                <TextContainer />

                <h4>TextContainer inside App #1</h4>
                <TextContainer />

                <App2 />

            </div>
        );
    }

}
