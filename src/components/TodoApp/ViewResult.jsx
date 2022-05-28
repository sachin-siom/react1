import React, { Component, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AuthenticationService from "./AuthenticationService.js";
import { DataGrid,GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { drawDetailsUrl } from "./Constant";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

class ViewResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dropDownValue: "",
      startDate: new Date(),
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
      { field: "drawTime", headerName: "Draw Time", width: 150 , headerAlign: 'center', align: 'center'},
      { field: "0_100", headerName: "0-100", width: 75 , headerAlign: 'center', align: 'center'},
      { field: "101_200", headerName: "101-200", width: 75 , headerAlign: 'center', align: 'center'},
     
    ];
    
    const propsRowStyle = (rowData, index)=>({
      backgroundColor: rowData.wonPoints> 0 ? '#90EE90' : '#fff',
    })
    
    
    return (
      <div>
        <center>
        <Card style={{ width: "95%", top:0 }} >
            <CardHeader
              title="Today's Results"
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
        <div
          style={{
            height: 400,
            width: "100%",
            textAlign: "center",
          }}
        >
          <DataGrid
            style={{ display: "flex" }}
            rows={this.state.data}
            rowStyle={propsRowStyle}
            columns={columns}
            pageSize={100}
            components={{ Toolbar: this.CustomToolbar }}
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

  handleDropDownChange(event) {
    this.setState({ dropDownValue: event.target.value });
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  submitData() {
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

export default ViewResult;
