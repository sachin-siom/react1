import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import AuthenticationService from "./AuthenticationService.js";
import { commissionReportUrl } from "./Constant.js";

class CommissionReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      totalCommission: '',
      totalAdminProfit: '',
      fDate: new Date(),
      tDate: new Date(),
      error: "",
    };
    this.handleChangeFdate = this.handleChangeFdate.bind(this);
    this.handleChangeTDate = this.handleChangeTDate.bind(this);
    this.submitData = this.submitData.bind(this);
    this.populateDataInTable = this.populateDataInTable.bind(this);
    this.CustomToolbar = this.CustomToolbar.bind(this);
  }

  CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
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
    this.setState({
      data: response.data.commissionResponseList,
      totalCommission: response.data.totalCommission,
      totalAdminProfit: response.data.totalProfit
    });
  }

  render() {
    const columns = [
      { field: "retailId", headerName: "Retailer Id", width: 200, headerAlign: 'center', align: 'center' },
      { field: "totalPointsPlayed", headerName: "Total Points played", width: 200 , headerAlign: 'center', align: 'center'},
      { field: "pointsWon", headerName: "Total points won", width: 200 , headerAlign: 'center', align: 'center'},
      { field: "commissionPercentage", headerName: "Commission Percentage", width: 200, headerAlign: 'center', align: 'center' },
      { field: "commission", headerName: "Total Commission", width: 200 , headerAlign: 'center', align: 'center'},
      { field: "adminProfit", headerName: "Admin Profit", width: 200 , headerAlign: 'center', align: 'center'},
    ];

    return (
      <div>
          <center>
          <Card style={{ width: "95%", marginTop: '1%' }} >
          <CardHeader
            title="Admin Report"
          />
          <Divider />
          <CardContent className="table-responsive">
            <Grid container spacing={6} wrap="wrap">
              <Grid
                item
                md={16}
                sm={18}
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
                  <br/>
                  <br/>
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
                    Get Admin Report
                  </Button>
                </div>
                <div
                  style={{
                    height: 500,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <DataGrid
                    getRowId={(row) => row.retailId}
                    rows={this.state.data}
                    columns={columns}
                    pageSize={100}
                    components={{ Toolbar: this.CustomToolbar }}
                  />
                </div>
                <div
                  style={{
                    height: 700,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                 <b> Total Commission: {this.state.totalCommission}
                  <br></br>Admin Profit: {this.state.totalAdminProfit}</b>
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
