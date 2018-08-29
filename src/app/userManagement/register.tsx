import * as React from "react";

export interface IRegisterProps {
    registerUser: (usernName: string, passord: string) => any;
}

export interface IRegisterState {
    userName: string;
    password: string;
    confirmPassword: string;
}

export class Register extends React.Component<IRegisterProps, IRegisterState> {

    public constructor(props: IRegisterProps, context: IRegisterState) {
        super(props, context);

        this.state = {
            userName: "",
            password: "",
            confirmPassword: "",
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

        const onChangeConfirmPassword = (e: any): void => {
            const confirmPassword = e.target.value;
            this.setState({ confirmPassword });
        }

        const onRegisterUser = (e: any): void => {
            e.preventDefault();
            this.props.registerUser(this.state.userName, this.state.password);
        }

        const registerEnabled = this.state.userName.trim().length > 0 && this.state.password.trim().length > 0;

        const passwordAndConfirmMatch = this.state.password === this.state.confirmPassword;

        return (
            <form>
                <div >
                    <h2>Register</h2>
                    <fieldset className="myForm">
                        <div>
                            <input type="text" id="reg_username" name="password" aria-label="Username" placeholder="User Name" value={this.state.userName} onChange={onChangeUsername} />
                        </div>
                        <div>
                            <input type="password" id="reg_password" name="password" aria-label="Password" placeholder="Password" value={this.state.password} onChange={onChangePassword} />
                        </div>
                        <div>
                            <input type="password" id="confirmPassword" name="confirmPassword" aria-label="Confirm Password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={onChangeConfirmPassword} />
                        </div>
                        <div>
                            <button onClick={onRegisterUser} disabled={!registerEnabled || !passwordAndConfirmMatch}>Register</button>

                        </div>
                        {!passwordAndConfirmMatch &&
                            <div>Password and Confirm Password must match.</div>
                        }
                    </fieldset>
                </div>
            </form>

        );
    }

}
