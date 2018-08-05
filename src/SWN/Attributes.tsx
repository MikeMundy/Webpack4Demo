import * as React from "react";

import { Charsheet } from "./Charsheet";

import "./chargen.scss";

export interface IAttributes {

}

export const Attributes: React.SFC<IAttributes> = (props: IAttributes) => {
    return (
        <React.Fragment>
            <div className="screen">
                <div>
                    <span className="nav"><b><b>[Attributes]</b> > Background > Class > Focus > Hobby Skill > Equipment > Final Details</b></span>
                </div>
                <h1>Attributes</h1>
                <div className="section"><input type="radio" />Randomly generate attributes, or  <input type="radio" />Allocate standard attribute set</div>
                <div className="section">
                    <h3>Randomly generated stats:</h3>
                    <div className="randomStats">
                        <div><span>Strength</span><span>14</span><span>+0</span><span>Set as 14 (was 10)</span></div>
                        <div><span>Dexterity</span><span>11</span><span>+0</span><span>Set as 14</span></div>
                        <div><span>Constitution</span><span>13</span><span>+0</span><span>Set as 14</span></div>
                        <div><span>Intelligence</span><span>8</span><span>+0</span><span>Set as 14</span></div>
                        <div><span>Wisdom</span><span>11</span><span>+0</span><span>Set as 14</span></div>
                        <div><span>Charisma</span><span>9</span><span>+0</span><span>Set as 14</span></div>
                    </div>
                    <div><button>Roll</button> <button>Re-Roll</button> You have re-rolled x times.</div>
                </div>
                <div className="section">
                    <h3>Standard set of stats:</h3>
                    <div className="randomStats">
                        <div><span>Strength</span><span>14</span><span>+0</span><span>dwn</span></div>
                        <div><span>Dexterity</span><span>12</span><span>+0</span><span>up/dwn</span></div>
                        <div><span>Constitution</span><span>11</span><span>+0</span><span>up/dwn</span></div>
                        <div><span>Intelligence</span><span>10</span><span>+0</span><span>up/dwn</span></div>
                        <div><span>Wisdom</span><span>9</span><span>+0</span><span>up/dwn</span></div>
                        <div><span>Charisma</span><span>7</span><span>+0</span><span>up</span></div>
                    </div>
                </div>
                <div className="section"><button>Next</button> > Background</div>
                <Charsheet/>
            </div>
        </React.Fragment>
    );
}
