import * as React from "react";

export interface ICleric {
    // test: string;
}

export const Cleric:React.SFC<ICleric> = (props:ICleric) => {
    return(
        <div>Bless you! I'm a Cleric!!</div>
    )
}