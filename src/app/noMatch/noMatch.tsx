import * as React from "react";

export interface INoMatchProps {}

export const NoMatch: React.SFC<INoMatchProps> = (props: INoMatchProps) => {
    return (
        <div >
            <h2>No match found</h2>
        </div>
    );
}