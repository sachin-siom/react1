import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport
} from "@mui/x-data-grid";
import clsx from "clsx";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import AuthenticationService from "./AuthenticationService.js";
import { drawDetailsUrl } from "./Constant";
import RetailerDropDown from "./RetailerDropDown.jsx";



class DrawDetails extends React.Component {
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
    this.CustomToolbar = this.CustomToolbar.bind(this);
  }

  CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  handleCallback(childData) {
    this.setState({ dropDownValue: childData });
  }

  render() {
    const columns = [
      {
        field: "id",
        headerName: "ID",
        width: 150,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "draw",
        headerName: "Draw Time",
        width: 150,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "setPoints",
        headerName: "Set Points",
        width: 150,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "wonPoints",
        headerName: "Won Points",
        cellClassName: (params) => {
          if (params.value == null) {
            return "";
          }

          return clsx("super-app", {
            positive: params.value > 0,
          });
        },
        width: 150,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "betCount",
        headerName: "Total Bet Count",
        width: 150,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "winCount",
        headerName: "Bet Won Count",
        width: 150,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "winNumbers",
        headerName: "Winning Numbers",
        width: 250,
        headerAlign: "center",
        align: "center",
      },
    ];
    const datagridSx = {
      borderRadius: 2,
      "& .MuiDataGrid-main": { borderRadius: 2 },
      "& .MuiDataGrid-virtualScrollerRenderZone": {
        "& .MuiDataGrid-row": {
          "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
        },
      },
      "& .MuiDataGrid-columnHeaders": {
        fontSize: 16,
      },
    };
    return (
      <div>
        <center>
          <Card style={{ width: "95%", top: 0 }}>
            <CardHeader
              title="Draw Details"
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
                  {this.state.error && (
                    <div className="alert alert-danger">Please select retailer drop down</div>
                  )}
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
                      Get Draw Details
                    </Button>
                  </div>
                  <div
                    style={{
                      height: 700,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        height: 700,
                        width: 1,
                        "& .super-app.positive": {
                          backgroundColor: "rgba(157, 255, 118, 0.49)",
                          color: "#1a3e72",
                          fontWeight: "600",
                          width: "100%",
                        },
                      }}
                    >
                      <DataGrid
                        style={{ display: "flex" }}
                        rows={this.state.data}
                        columns={columns}
                        sx={datagridSx}
                        pageSize={100}
                        components={{ Toolbar: this.CustomToolbar }}
                      />
                    </Box>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </center>
      </div>
    );
  }

  handleDropDownChange(event) {
    this.setState({ dropDownValue: event.target.value });
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  submitData() {
    if (this.state.dropDownValue === "" || this.state.dropDownValue == NaN) {
      this.setState({ error: "Please select retailer drop down" });
      return;
    }
    this.setState({ error: "" });
    AuthenticationService.executeRetailerTicket(
      `${drawDetailsUrl}`,
      new Date(this.state.startDate).toLocaleDateString("sv-SE", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
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
}

export default DrawDetails;
