import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component{

    constructor(props){

        super(props)
        this.state = {
            username : '',
            password : '',
            hasLoginFailed : false,
            showSuccessMsg : false
        }
        // this.handleUserNameChange = this.handleUserNameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        //this.ShowInvalidCredentials = this.ShowInvalidCredentials.bind(this)
    }

    handleChange (event) {
        this.setState({[event.target.name] : event.target.value})
    }

    loginClicked () {
        //dummy, dummy
        /*if(){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            //this.props.history.push("/welcome")
            this.props.navigate(`/welcome/${this.state.username}`)
            this.setState({hasLoginFailed : false})
            this.setState({showSuccessMsg : true})
        } else {
            this.setState({hasLoginFailed : true})
            this.setState({showSuccessMsg : false})
        }*/
        AuthenticationService.executeBasicAuthService(this.state.username, this.state.password)
        .then( () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.navigate(`/welcome/${this.state.username}`)
        }).catch( () => {
                this.setState({hasLoginFailed : true})
                this.setState({showSuccessMsg : false})
            }
        )
    }

    // handleUserNameChange (event) {
    //     console.log(event.target.value)
    //     this.setState({[event.target.name] : event.target.value})
    // }

    // handlePasswordChange (event) {
    //     console.log(event.target.value)
    //     this.setState({password : event.target.value})
    // }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMsg && <div>Login Success</div>}
                    {/*<ShowSuccessfulLogin showSuccessMsg={this.state.showSuccessMsg}/>*/}
                    User Name: <input type="text" name = "username" value={this.state.username} onChange = {this.handleChange}/>
                    Password: <input type="password" name = "password" value={this.state.password} onChange = {this.handleChange}/>
                    <button className="btn btn-success" onClick= {this.loginClicked} >Login</button>
                </div>
            </div>
        )
    }
}
export default LoginComponent