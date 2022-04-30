import React, { Component } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import withNavigation from './WithNavigation.jsx'
import withParams from "./WithParams.jsx"
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from "./LoginComponent.jsx";

class FooterComponent extends Component{
    render() {
        return (
            <footer className="footer-responsive  fixed-bottom" style={{backgroundColor:'#002776'}}>
                    <span style={{fontWeight:'bold', color:'white',position:'relative', height:10}}> All rights reserved 2022</span>
            </footer>
        )
    }

}

export default FooterComponent