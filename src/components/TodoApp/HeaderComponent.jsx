import React from "react";
import "../../bootstrap/bootstrap.css";
import AuthenticationService from "./AuthenticationService.js";
import SideBar from './SideBar.jsx';

const HeaderComponent = () => {
    
    const [toggleMenu, setToggleMenu] = React.useState(false);

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    console.log(''+isUserLoggedIn);

        return (
            <>
            {isUserLoggedIn && <SideBar/>}
            </>
            
        )
    
}
export default HeaderComponent