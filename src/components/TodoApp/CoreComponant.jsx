import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import LoginComponent from "./LoginComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import Results from "./Results.jsx";
import WelcomeComponent from './WelcomeComponent.jsx';
import withNavigation from './WithNavigation.jsx';
import withParams from "./WithParams.jsx";


class CoreComponant extends Component{
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        // const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/login" exact element={<LoginComponentWithNavigation />}/> 
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /> </AuthenticatedRoute>}/>
                        <Route path="/" element={<Results />}/>
                        <Route path="*" element={<ErrorComponant/>}/>
                    </Routes> 
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

function ErrorComponant() {
    return <div>An Error occured, I don't know what to do! Contact support at BhagyaLaxmi Lottery</div>
}

function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    } else {
        return null
    }
}

function ShowSuccessfulLogin(props) {
    if(props.showSuccessMsg){
        return <div>Login Success</div>
    } else {
        return null
    }
}

export default CoreComponant