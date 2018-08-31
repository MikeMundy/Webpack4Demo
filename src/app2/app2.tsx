import * as React from "react";

import TextContainer from "./textContainer";

export interface IAppProps {
}

export interface IAppState {
}

export class App2 extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {

        return (
            <div>
                <h1>App 2</h1>
                
                <h4>TextContainer inside App #1 </h4>
                <TextContainer/>

                <h4>TextContainer inside App #1</h4>
                <TextContainer/>

            </div>
        );
    }

}
