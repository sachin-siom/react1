
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import React, { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import "../../assets/sidebar.js";
import "../../bootstrap/sidebar.css";
import Adminreport from "../components/adminreport.jsx";
import Commissionreport from "../components/commissionreport.jsx";
import Fairplaymanagement from "../components/fairplaymanagement.jsx";
import Liveplayer from "../components/liveplayer.jsx";
import Operator from "../components/operator.jsx";
import Drawdetails from "../components/reports/drawdetails.jsx";
import RetailerTicket from "../components/reports/retailerTickets.jsx";
import Resetmac from "../components/resetmac.jsx";
import Settings from "../components/settings.jsx";
import Support from "../components/support.jsx";
import Users from '../components/users.jsx';
import CommissionReport from '../TodoApp/CommissionReport.jsx';
import AddRetailer from './AddRetailer.jsx';
import AddRetailerBalance from './AddRetailerBalance.jsx';
import AuthenticatedRoute from './AuthenticatedRoute';
import AuthenticationService from "./AuthenticationService.js";
import ListTodosComponentWithParams from './ListTodosComponentWithParams.jsx';
import ManageAdmin from "./ManageAdmin.jsx";
import RetailerDetailsComponentWithParams from './RetailerDetailsComponentWithParams.jsx';
import ViewRetailers from './ViewRetailers.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import withParams from "./WithParams.jsx";





const SideBar = () => {

  const [isContentToggled, setIsContentToggled] = useState(window.matchMedia('(max-width: 768px)').matches, false);

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
      </>
      <div className="wrapper">
        {isContentToggled && (
          <nav id="sidebar">
            <div className="sidebar-header">
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
                onClick={() => isContentToggled == true? setIsContentToggled(false): setIsContentToggled(true)}
                className="btn btn-info"
                type="button"
                id="sidebarCollapse"
              >
                <FormatAlignLeftIcon />
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
            <Route path="/CommissionReport" element={<AuthenticatedRoute><CommissionReport /></AuthenticatedRoute>} />

            {/* SideBar Components Routing */}
            <Route path="/users" element={<AuthenticatedRoute><Users /></AuthenticatedRoute>} />
            <Route path="/commissionreport" element={<AuthenticatedRoute><Commissionreport /></AuthenticatedRoute>} />
            <Route path="/liveplayer" element={<AuthenticatedRoute><Liveplayer /></AuthenticatedRoute>} />
            <Route path="/adminreport" element={<AuthenticatedRoute><Adminreport /></AuthenticatedRoute>} />
            <Route path="/fairplaymanagement" element={<AuthenticatedRoute><Fairplaymanagement /></AuthenticatedRoute>} />
            <Route path="/operator" element={<AuthenticatedRoute><Operator /></AuthenticatedRoute>} />
            <Route path="/support" element={<AuthenticatedRoute><Support /></AuthenticatedRoute>} />
            <Route path="/resetmac" element={<AuthenticatedRoute><Resetmac /></AuthenticatedRoute>} />
            <Route path="/settings" element={<AuthenticatedRoute><Settings /></AuthenticatedRoute>} />
            <Route path="/reports/drawdetails" element={<AuthenticatedRoute><Drawdetails /></AuthenticatedRoute>} />
            <Route path="/reports/retailerticket" element={<AuthenticatedRoute><RetailerTicket /></AuthenticatedRoute>} />


          </Routes>

          {/* Contnet is displayed here*/}
        </div>
      </div>
    </>
  );
};
export default SideBar;
