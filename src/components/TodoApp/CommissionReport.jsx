import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthenticationService from "./AuthenticationService.js";
import { DataGrid } from "@mui/x-data-grid";
import { commissionReportUrl } from "./Constant.js";
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

class CommissionReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fDate: new Date(),
      tDate: new Date(),
      error: "",
    };
    this.handleChangeFdate = this.handleChangeFdate.bind(this);
    this.handleChangeTDate = this.handleChangeTDate.bind(this);
    this.submitData = this.submitData.bind(this);
    this.populateDataInTable = this.populateDataInTable.bind(this);
    
  }
  

  handleChangeFdate(date) {
    this.setState({ fDate: date });
  }

  handleChangeTDate(date) {
    this.setState({ tDate: date });
  }

  submitData() {
    let fdate = new Date(this.state.fDate).toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    let tdate = new Date(this.state.tDate).toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    AuthenticationService.executCommissionReport(
    `${commissionReportUrl}`,
      fdate,
      tdate
    ).then((response) => this.populateDataInTable(response))
      .catch();
  }

  populateDataInTable(response) {
    console.log(response.data.commissionResponseList);
    this.setState({
      data: response.data.commissionResponseList,
    });
  }

  render() {
    const columns = [
      { field: "retailId", headerName: "Retailer Id", width: 200 },
      { field: "totalPointsPlayed", headerName: "Total Points played", width: 200 },
      { field: "pointsWon", headerName: "Total points won", width: 200 },
      { field: "commissionPercentage", headerName: "Commission Percentage", width: 200 },
      { field: "commission", headerName: "Total Commission", width: 200 },
      { field: "adminProfit", headerName: "Admin Profit", width: 200 },
    ];

    return (
      <div>
          <center>
        <Card style={{ width: "75%", marginTop: 25 ,marginBottom:35}}>
          <CardHeader
            // subheader="Manage "
            title="Commission Report"
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
                <div className="col-sm-10">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="From Date"
                      inputFormat="yyyy-MM-dd"
                      value={this.state.fDate}
                      onChange={this.handleChangeFdate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="To Date"
                      inputFormat="yyyy-MM-dd"
                      value={this.state.tDate}
                      onChange={this.handleChangeTDate}
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
                    Get Commission Report
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
                    getRowId={(row) => row.retailI}
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

export default CommissionReport;
