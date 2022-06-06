
import React, { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

// import PersonAddIcon from '@material-ui/icons/PersonAdd';

import "../../bootstrap/sidebar.css";
import "../../assets/sidebar.js";
// logout
import AuthenticationService from "./AuthenticationService.js";

// import { styled, alpha } from "@mui/material/styles";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

import logo from '../../assets/logo.png';

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import withNavigation from './WithNavigation.jsx'
import withParams from "./WithParams.jsx"
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from "./LoginComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import WelcomeComponent from './WelcomeComponent.jsx'
import ListTodosComponentWithParams from './ListTodosComponentWithParams.jsx'
import RetailerDetailsComponentWithParams from './RetailerDetailsComponentWithParams.jsx'
import AddRetailer from './AddRetailer.jsx'
import ViewRetailers from './ViewRetailers.jsx'
import AddRetailerBalance from './AddRetailerBalance.jsx'
import Users from '../components/users.jsx'
import Commissionreport from "../components/commissionreport.jsx";
import Liveplayer from "../components/liveplayer.jsx";
import Adminreport from "../components/adminreport.jsx";
import Fairplaymanagement from "../components/fairplaymanagement.jsx";
import Operator from "../components/operator.jsx";
import Support from "../components/support.jsx";
import Resetmac from "../components/resetmac.jsx";
import Settings from "../components/settings.jsx";
import Drawdetails from "../components/reports/drawdetails.jsx";
import RetailerTicket from "../components/reports/retailerTickets.jsx";
import CommissionReport from '../TodoApp/CommissionReport.jsx'
import ManageAdmin from "./ManageAdmin.jsx";


const SideBar = () => {
  
  const [isContentToggled, setIsContentToggled] = useState(window.matchMedia("max-width: 768px").matches, false);

  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const WelcomeComponentWithParams = withParams(WelcomeComponent);
  return (
    <>
    <>
      {/*<div>
        {/* <MenuIcon
          onClick={() => setToggleMenu(true)}
          style={{
            float: "left",
            cursor: "pointer",
            fontSize: "2rem",
            color: "#fff",
            marginTop:15,
            borderRadius: 8,
            postion: "fixed",
            backgroundColor:'#002776'
          }}
        /> */}

      {/* {toggleMenu && ( */}
      {/* <div
            className="navbar-nav"
            style={{
              float: "left",
              padding: 10,
              margin: 5,
              marginTop: 0,
              left: 0,
              transition: "all 0.3s ease-in-out",
              fontSize: "16px",
              backgroundColor: "#e9ecff",
              width: 250,
              height: 700,
              overflowY: "scroll",
            }}
          > */}
      {/* <CancelIcon
              onClick={() => setToggleMenu(false)}
              style={{
                float: "left",
                cursor: "pointer",
              }}
            /> */}
      {/* {isUserLoggedIn && (
              <li
                onClick={() => setToggleMenu(false)}
                className="nav-link logout"
              >
                <Link
                  style={{
                    fontWeight: "bold",
                    padding: 7,
                    color: "black",
                    borderRadius: 5,
                    backgroundColor: "red",
                  }}
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
             )} 
            <Button style={{ marginTop: 10 }} variant="text">
              Manage Points
            </Button>
            <Link className="nav-link" to="/addRetailer">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                Add Users
              </Button>
            </Link>
            <Link className="nav-link" to="/viewRetailers">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                 View Users
              </Button>
            </Link>

            <Link className="nav-link" to="/addRetailerBalance">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                Add Retailer Balance
              </Button>
            </Link>

            <Link className="nav-link" to="/manageAdmin">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                 Manage Admin
              </Button>
            </Link> */}

      {/* <Link className="nav-link" to="">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <PhoneIphoneIcon />
                Mobile Users
              </Button>
            </Link> */}

      {/* <Link className="nav-link" to="/reports"> */}
      {/* <Button
              style={{ marginTop: 10, width: "100%" }}
              variant="outlined"
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <PieChartIcon />
              Reports
            </Button>
            {/* </Link> */}
      {/*<StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Link className="nav-link" to="/drawDetails">
                <MenuItem onClick={handleClose} disableRipple>
                  <Button
                    style={{ marginTop: 10, width: "100%" }}
                    onClick={() => setToggleMenu(false)}
                    variant="outlined"
                  >
                    <PieChartIcon />
                    Draw Details
                  </Button>
                </MenuItem>
              </Link>
              <Link className="nav-link" to="/retailerTickets">
                <MenuItem onClick={handleClose} disableRipple>
                  <Button
                    style={{ marginTop: 10, width: "100%" }}
                    onClick={() => setToggleMenu(false)}
                    variant="outlined"
                  >
                    <PieChartIcon />
                    Retailer Ticket
                  </Button>
                </MenuItem>
              </Link>
            </StyledMenu>

            <Link className="nav-link" to="/commissionreport">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <PieChartIcon />
                Commission Report
              </Button>
            </Link> */}

      {/* <Link className="nav-link" to="">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <SportsEsportsIcon />
                Feature Settings
              </Button>
            </Link> */}

      {/* <Link className="nav-link" to="/liveplayer">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <SportsEsportsIcon />
                Live Players
              </Button>
            </Link>

            <Link className="nav-link" to="/adminreport">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                
                Admin Reports
              </Button>
            </Link> */}

      {/* <Link className="nav-link" to="">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <EmojiEventsIcon />
                Lottery
              </Button>
            </Link> */}

      {/* <Link className="nav-link" to="">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <RoomServiceIcon />
                Manage Lottery
              </Button>
            </Link> */}

      {/* <Link className="nav-link" to="/fairplaymanagement">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <AlbumIcon />
                Fair Play Management
              </Button>
            </Link>

            <Link className="nav-link" to="/operator">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <CookieIcon />
                Operators
              </Button>
            </Link>

            <Link className="nav-link" to="/support">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <SupportIcon />
                Support
              </Button>
            </Link> */}

      {/* <Link className="nav-link" to="">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <EmailIcon />
                Messages
              </Button>
            </Link> */}
      {/* 
            <Link className="nav-link" to="/resetmac">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <NetworkWifiIcon />
                Reset MAC
              </Button>
            </Link>

            <Link className="nav-link" to="/settings">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <SettingsIcon />
                Settings
              </Button>
            </Link> */}

      {/* <Link className="nav-link" to="">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <LoopIcon />
                Recycle
              </Button>
            </Link> */}
      {/* </div> */}
      {/*  )}  */}
      {/* </div> */}
    </>
      <div className="wrapper">
{/* Todo: SideBar Bugs */}
        {/* <!-- Sidebar  --> */}
        {isContentToggled && (
        <nav id="sidebar">
          <div className="sidebar-header">
            {/* <img src={logo} height="150" width="150"alt="Logo" /> */}
            <h3>BhagyaLaxmi Lottery</h3>
          </div>

          <ul className="list-unstyled components">
            <p>Manage Points</p>
            <li className="active">
            <Link className="nav-link" to="/addRetailer" 
                data-toggle="collapse"
                aria-expanded="false"
              >
                Add User
              </Link>
            </li>
            <li>
            <Link className="nav-link" to="/viewRetailers" >
              
                View Retailers
            </Link>
            </li>

            <li>
              
            <Link className="nav-link" to="/addRetailerBalance">
              
                 Add  Balance
            </Link>
            </li>
            <li>
            <Link className="nav-link" to="/manageAdmin" >
              
                 Manage Admin
              
            </Link>
            </li>
            <li>

            <Link className="nav-link" to="/drawDetails" >
              
               Draw Details
            </Link>
            </li> 
            <li>

              <Link className="nav-link" to="/retailerTickets" >
                
              Retailer Ticket
              </Link>
              </li>
              <li>

              <Link className="nav-link" to="/commissionreport" >
                
              Admin Report
              </Link>
              </li>
          </ul>

         
          <ul className="list-unstyled CTAs">
          {isUserLoggedIn && (<li>
            <Link
                  style={{
                    fontWeight: "bold",
                    padding: 7,
                    color: "black",
                    borderRadius: 5,
                    backgroundColor: "red",
                  }}
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout}
                >
                Logout
              </Link>
            </li>)} 
            
          </ul>
        </nav>
        )}
        <div id="content" className="banner02">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" >
              
              <button
                onClick={() => setIsContentToggled(true)}
                className="btn btn-info"
                type="button"
                id="sidebarCollapse"
              >
                <FormatAlignLeftIcon  />
              </button>
            </div>
          </nav>              
          <Routes>
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />

                        <Route path="/addRetailer" element={<AuthenticatedRoute><AddRetailer /></AuthenticatedRoute>} />
                        <Route path="/viewRetailers" element={<AuthenticatedRoute><ViewRetailers /></AuthenticatedRoute>} />
                        <Route path="/addRetailerBalance" element={<AuthenticatedRoute><AddRetailerBalance /></AuthenticatedRoute>} />
                        <Route path="/ManageAdmin" element={<AuthenticatedRoute><ManageAdmin /></AuthenticatedRoute>} />

                        <Route path="/drawDetails" element={<AuthenticatedRoute><ListTodosComponentWithParams /></AuthenticatedRoute>} />
                        <Route path="/retailerTickets" element={<AuthenticatedRoute><RetailerDetailsComponentWithParams /></AuthenticatedRoute>} />
                        <Route path="/CommissionReport" element={<AuthenticatedRoute><CommissionReport/></AuthenticatedRoute>} />
                        
                        {/* SideBar Components Routing */}
                        <Route path="/users" element={<AuthenticatedRoute><Users/></AuthenticatedRoute>} />
                        <Route path="/commissionreport" element={<AuthenticatedRoute><Commissionreport/></AuthenticatedRoute>} />
                        <Route path="/liveplayer" element={<AuthenticatedRoute><Liveplayer/></AuthenticatedRoute>} />
                        <Route path="/adminreport" element={<AuthenticatedRoute><Adminreport/></AuthenticatedRoute>} />
                        <Route path="/fairplaymanagement" element={<AuthenticatedRoute><Fairplaymanagement/></AuthenticatedRoute>} />
                        <Route path="/operator" element={<AuthenticatedRoute><Operator/></AuthenticatedRoute>} />
                        <Route path="/support" element={<AuthenticatedRoute><Support/></AuthenticatedRoute>} />
                        <Route path="/resetmac" element={<AuthenticatedRoute><Resetmac/></AuthenticatedRoute>} />
                        <Route path="/settings" element={<AuthenticatedRoute><Settings/></AuthenticatedRoute>} />
                        <Route path="/reports/drawdetails" element={<AuthenticatedRoute><Drawdetails/></AuthenticatedRoute>} />
                        <Route path="/reports/retailerticket" element={<AuthenticatedRoute><RetailerTicket/></AuthenticatedRoute>} />


            </Routes>

                {/* Contnet is displayed here*/}
        </div>
      </div>
    </>
  );
};
export default SideBar;
