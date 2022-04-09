import React, { Component } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import AuthenticationService from "./AuthenticationService.js";


class HeaderComponent extends Component{
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(''+isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div> <a className="navbar-brand">Grocery test app</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/welcome/test">Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/addRetailer">Add Retailer</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/viewRetailers">View Retailer</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/addRetailerBalance">Add Retailer Balance</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/managePoints">Manage points</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/drawDetails">Draw Details</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/retailerTickets">Retailer Tickets</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
            
        )
    }

}
export default HeaderComponent