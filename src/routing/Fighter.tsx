import * as React from "react";

export interface IFighter {
    // test: string;
}

export const Fighter:React.SFC<IFighter> = (props:IFighter) => {
    return(
        <div>Grahh! I'm a Fighter!!</div>
    )
}