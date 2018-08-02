import * as React from "react";

import { Link, Route } from "react-router-dom";

import { Cleric } from "./Cleric";
import { Fighter } from "./Fighter";

export interface IRoutingExampleProps { title?: string }

export const RoutingExample: React.SFC<IRoutingExampleProps> = (props: IRoutingExampleProps) => {
    return (
        <React.Fragment>
            <h1>This is the Routing Example. Title is '{props.title}'.</h1>

            <ul>
                <li><Link to="/cleric" >Cleric</Link></li>
                <li><Link to="/fighter" >Fighter</Link></li>
                <li><Link to="/thief" >Thief</Link></li>
                <li><Link to="/magicuser" >Magic-User</Link></li>
            </ul>

            <Route path="/fighter" component={Fighter} />
            <Route path="/cleric" component={Cleric} />
            <Route path="/thief" render={(props) => 
                <div>Shhhh!! I'm a Thief!</div>
             } />
            <Route path="/magicuser" render={(props) => 
                <div>Abracadabra!! I'm a Magic-User!</div>
             } />             
        </React.Fragment>
    );
}

RoutingExample.defaultProps = { title: "Default title" }; 