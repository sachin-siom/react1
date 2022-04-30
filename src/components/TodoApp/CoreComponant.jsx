import React, { Component } from "react";
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
import ManagePoints from './ManagePoints.jsx'
import RetailerDropDown from './RetailerDropDown.jsx'
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


class CoreComponant extends Component{
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" exact element={<LoginComponentWithNavigation />}/>
                        <Route path="/login" element={<LoginComponentWithNavigation />}/>
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />

                        <Route path="/addRetailer" element={<AuthenticatedRoute><AddRetailer /></AuthenticatedRoute>} />
                        <Route path="/viewRetailers" element={<AuthenticatedRoute><ViewRetailers /></AuthenticatedRoute>} />
                        <Route path="/addRetailerBalance" element={<AuthenticatedRoute><AddRetailerBalance /></AuthenticatedRoute>} />
                        <Route path="/managePoints" element={<AuthenticatedRoute><ManagePoints /></AuthenticatedRoute>} />

                        <Route path="/drawDetails" element={<AuthenticatedRoute><ListTodosComponentWithParams /></AuthenticatedRoute>} />
                        <Route path="/retailerTickets" element={<AuthenticatedRoute><RetailerDetailsComponentWithParams /></AuthenticatedRoute>} />
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /> </AuthenticatedRoute>}/>
                        
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



                        <Route path="*" element={<ErrorComponant/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

function ErrorComponant() {
    return <div>An Error occured, I don't know what to do! Contact support at abcd-efgh-ijkl</div>
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