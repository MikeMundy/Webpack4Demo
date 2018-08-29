import * as React from "react";

import { IUser } from "./user";

// import { Login } from "./login";
// import { Register } from "./register";

import { LoginContainer } from "./userManagement/loginContainer";
// import { RegisterContainer } from "./userManagement/registerContainer";

export interface IAppProps {
    user: IUser;
    // updateUser: (user: IUser) => any;
}

export interface IAppState {
    //user: IUser;
}

export class App extends React.Component<any, any> {

    public constructor(props: any, context: any) {
        super(props, context);

        // this.state = {
        //     user: {
        //         userName: props.user.userName,
        //         isLoggedIn: props.user.isLoggedIn,
        //     },
        //     password: "",
        // }
    }

    public render() {

        return (
            <div>
                <h1>App</h1>

                <div>User Name: {this.props.user.userName}</div>
                <div>Logged In: {this.props.user.isLoggedIn.toString()}</div>
                
                <h4>LoginContainer inside App</h4>
                <LoginContainer/>

                {/*<h4>RegisterContainer inside App</h4>
                <RegisterContainer/>*/}

                {/*<Login user={this.props.user} updateUser={this.props.updateUser} />
                <Register />*/}

                {/*<h1>Log In</h1>
                <div>Username: {this.state.user.userName}</div>
                <div>Logged In : {this.state.user.isLoggedIn.toString()}</div>
                <div>Username: <input type="text" value={this.state.user.userName} onChange={onChangeUsername} /></div>
                <div>Password: <input type="password" value={this.state.password} onChange={onChangePassword} /> {this.state.password}</div>
                <button onClick={onChangeLoginState}>Login/Logout</button>
                <button onClick={onLogin}>Log in</button>*/}
            </div>
        );
    }

}
