import "./style.scss";

import * as React from "react";

import { IUser } from "../user";

export interface ILoginProps {
    user: IUser;
    updateUser: (user: IUser) => any;
}

export interface ILoginState {
    userName: string;
    password: string;
}

export class Login extends React.Component<ILoginProps, ILoginState> {

    public constructor(props: ILoginProps, context: any) {
        super(props, context);

        this.state = {
            userName: "",
            password: "",
        }
    }

    public render() {

        const onChangeUsername = (e: any): void => {
            const userName = e.target.value;
            this.setState({ userName });
        }

        const onChangePassword = (e: any): void => {
            const password = e.target.value;
            this.setState({ password });
        }

        const onLogin = (e: any): void => {
            e.preventDefault();
            // const user = Object.assign({}, this.state.user);
            // user.isLoggedIn = !user.isLoggedIn;
            // this.setState({ user });
        }

        const loginEnabled = this.state.userName.trim().length > 0 && this.state.password.trim().length > 0;

        return (
            <form>
                <div >
                    <h2>Log In</h2>
                    <fieldset className="myForm">
                        <div>
                            <input type="text" id="log_username" name="password" aria-label="Username" placeholder="User Name" value={this.state.userName} onChange={onChangeUsername} />
                        </div>
                        <div>
                            <input type="password" id="log_password" name="password" aria-label="Password" placeholder="Password" value={this.state.password} onChange={onChangePassword} />
                        </div>
                        <div>
                            <button onClick={onLogin} disabled={!loginEnabled}>Log in</button>
                        </div>
                    </fieldset>
                </div>
            </form>
        );
    }

}
