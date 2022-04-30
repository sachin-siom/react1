import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthenticationService from "./AuthenticationService.js";
import { DataGrid } from "@mui/x-data-grid";
import { retailerTicketUrl } from "./Constant";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import RetailerDropDown from "./RetailerDropDown.jsx";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

class RetailerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dropDownValue: "",
      startDate: new Date(),
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.populateDataInTable = this.populateDataInTable.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
  }

  handleCallback(childData) {
    this.setState({ dropDownValue: childData });
  }
  handleDropDownChange(event) {
    this.setState({ dropDownValue: event.target.value });
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  submitData() {
    let date = new Date(this.state.startDate).toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    if (this.state.dropDownValue === "" || this.state.dropDownValue == NaN) {
      this.setState({ error: "Please select retailer drop down" });
      return;
    }
    this.setState({ error: "" });
    AuthenticationService.executeRetailerTicket(
      `${retailerTicketUrl}`,
      date,
      this.state.dropDownValue
    )
      .then((response) => this.populateDataInTable(response))
      .catch();
    console.log(
      new Date(this.state.startDate).toLocaleDateString("sv-SE", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }) +
        " " +
        this.state.dropDownValue
    );
  }

  populateDataInTable(response) {
    console.log(response.data);
    this.setState({
      data: response.data,
    });
  }

  render() {
    const columns = [
      { field: "id", headerName: "ID", width: 200, alignSelf: "center" },
      { field: "draw", headerName: "Draw Time", width: 200 },
      { field: "retailerId", headerName: "Retailer Id", width: 200 },
      { field: "ticketid", headerName: "Ticket Id", width: 200 },
      { field: "setPoints", headerName: "Set Points", width: 200 },
      { field: "wonPoints", headerName: "Won Points", width: 200 },
      { field: "claimed", headerName: "Is Claimed", width: 200 },
      { field: "claimedTime", headerName: "Claimed Time", width: 200 },
    ];

    return (
      <div>
          <center>
        <Card style={{ width: "75%", marginTop: 25 ,marginBottom:35}}>
          <CardHeader
            // subheader="Manage "
            title="Retailer Tickets"
          />
          <Divider />
          <CardContent className="table-responsive">
            <Grid container spacing={6} wrap="wrap">
              <Grid
                item
                md={16}
                sm={18}
                // sx={{
                //   display: "flex",
                //   flexDirection: "column",
                // }}
                xs={20}
              >
                <div className="col-sm-10">{this.state.error}</div>
                <div className="col-sm-10">
                  <RetailerDropDown parentCallback={this.handleCallback} />
                </div>
                <div className="col-sm-10">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Draw Date"
                      inputFormat="yyyy-MM-dd"
                      value={this.state.startDate}
                      onChange={this.handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <div className="col-sm-10">
                  <Button
                    style={{ margin: 8 }}
                    onClick={this.submitData}
                    variant="contained"
                    color="success"
                  >
                    Get Retailer Tickets
                  </Button>
                </div>
                <div
                  style={{
                    height: 400,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <DataGrid
                    rows={this.state.data}
                    columns={columns}
                    pageSize={100}
                  />
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        </center>
      </div>
    );
  }
}

export default RetailerDetails;
