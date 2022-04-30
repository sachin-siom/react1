import React, { Component, useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import AuthenticationService from "./AuthenticationService.js";
import { GiHamburgerMenu, GiCrossMark } from 'react-icons/gi';
import { Divider } from "@mui/material";
import "../../bootstrap/bootstrap.css";
import SideBar from './SideBar.jsx'

const HeaderComponent = () => {
    
    const [toggleMenu, setToggleMenu] = React.useState(false);

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    console.log(''+isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md " style={{backgroundColor:'#002776'}}>
                    <div> <a className="navbar-brand">Grocerytest app</a></div>
                    <ul className="navbar-nav-main">
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/welcome/test">Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/addRetailer">Add Retailer</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/viewRetailers">View Retailer</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/addRetailerBalance">Add Retailer Balance</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/managePoints">Manage points</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/drawDetails">Draw Details</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/retailerTickets">Retailer Tickets</Link></li>}
                    </ul>
                    <ul  className="navbar-nav justify-content-end">
                        {!isUserLoggedIn && <li className="nav-link login"><Link className="nav-link" to="/login" style={{right:0}}>Login</Link></li>}  
                    </ul>

                    <div className="app__navbar-smallscreen">

                        <GiHamburgerMenu className="app__navbar-menu" color="#fff" fontSize={27} onClick={()=>setToggleMenu(true)}/>

                    {toggleMenu &&(
                        <center>
                            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                                <GiCrossMark fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
                                <ul style={{alignItems:'center', justifyContent: 'center'}} className="app__navbar-smallscreen_links">
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" onClick={()=>setToggleMenu(false)} to="/welcome/test">Home</Link></li>}<Divider />
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" onClick={()=>setToggleMenu(false)} to="/addRetailer">Add Retailer</Link></li>}<Divider />
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" onClick={()=>setToggleMenu(false)} to="/viewRetailers">View Retailer</Link></li>}<Divider />
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" onClick={()=>setToggleMenu(false)} to="/addRetailerBalance">Add Retailer Balance</Link></li>}<Divider />
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" onClick={()=>setToggleMenu(false)} to="/managePoints">Manage points</Link></li>}<Divider />
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" onClick={()=>setToggleMenu(false)} to="/drawDetails">Draw Details</Link></li>}<Divider />
                                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" onClick={()=>setToggleMenu(false)} to="/retailerTickets">Retailer Tickets</Link></li>}
                                </ul>
                            </div>
                        </center>
                        
                    )}
                    </div>
                </nav>
                
                {isUserLoggedIn && <SideBar/>}
            </header>
            
        )
    
}
export default HeaderComponent