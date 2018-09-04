import * as React from "react";

export interface INoPermissionProps {}

export const NoPermission: React.SFC<INoPermissionProps> = (props: INoPermissionProps) => {
    return (
        <div >
            <h2>No permission for this component</h2>
        </div>
    );
}