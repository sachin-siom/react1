import { Button } from "@mui/material";
import React, { useState } from "react";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import SupportIcon from "@mui/icons-material/Support";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PieChartIcon from "@mui/icons-material/PieChart";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StarRateIcon from "@mui/icons-material/StarRate";
import EmailIcon from "@mui/icons-material/Email";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import SettingsIcon from "@mui/icons-material/Settings";
import LoopIcon from "@mui/icons-material/Loop";
import CookieIcon from "@mui/icons-material/Cookie";
import AlbumIcon from "@mui/icons-material/Album";
import { Link } from "react-router-dom";

// logout
import AuthenticationService from "./AuthenticationService.js";

import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={2}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const SideBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <MenuIcon
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
        />

        {toggleMenu && (
          <div
            className="navbar-nav"
            style={{
              float: "left",
              padding: 10,
              margin: 5,
              marginTop: 25,
              left: 0,
              transition: "all 0.3s ease-in-out",
              fontSize: "16px",
              backgroundColor: "#e9ecff",
              width: 300,
              height: 600,
              overflowY: "scroll",
            }}
          >
            <CancelIcon
              onClick={() => setToggleMenu(false)}
              style={{
                float: "left",
                cursor: "pointer",
              }}
            />
            {isUserLoggedIn && (
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
            <Link className="nav-link" to="/users">
              <Button
                style={{ marginTop: 10, width: "100%" }}
                onClick={() => setToggleMenu(false)}
                variant="outlined"
              >
                <PersonIcon /> Users
              </Button>
            </Link>

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
            <Button
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
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Link className="nav-link" to="/reports/drawdetails">
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
              <Link className="nav-link" to="/reports/retailerticket">
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
            </Link>

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

            <Link className="nav-link" to="/liveplayer">
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
                <StarRateIcon />
                Admin Reports
              </Button>
            </Link>

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

            <Link className="nav-link" to="/fairplaymanagement">
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
            </Link>

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
            </Link>

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
          </div>
        )} 
      </div>
    </>
  );
};
export default SideBar;
