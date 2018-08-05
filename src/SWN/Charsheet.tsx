import * as React from "react";

import "./chargen.scss";

export interface ICharsheet {

}

export const Charsheet: React.SFC<ICharsheet> = (props: ICharsheet) => {
    return (
        <React.Fragment>
            <div className="screen">
                <div>
                    <span className="nav"><b>Character Sheet</b></span>
                </div>
                <h1>Attributes</h1>
                <div className="section">
                    <div className="randomStats">
                        <div><span>Strength</span><span>14</span><span>+0</span></div>
                        <div><span>Dexterity</span><span>11</span><span>+0</span></div>
                        <div><span>Constitution</span><span>13</span><span>+0</span></div>
                        <div><span>Intelligence</span><span>8</span><span>+0</span></div>
                        <div><span>Wisdom</span><span>11</span><span>+0</span></div>
                        <div><span>Charisma</span><span>9</span><span>+0</span></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
