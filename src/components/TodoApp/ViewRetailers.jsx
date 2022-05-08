import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import {getAllRetailer} from './Constant'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import {enableRetailer, disableRetailer, registerMac} from './Constant'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid
} from "@mui/material";

class ViewRetailers extends Component {

    constructor(props) {
        super(props)
        this.state = {
          data: [],
          dataFetchError: false
        };
        this.setRetailerStatus = this.setRetailerStatus.bind(this);
        this.resetMAC = this.resetMAC.bind(this);
    }

    setRetailerStatus(thisRow){
        let url = ''
        if(thisRow.id === 1)
          return
        if(thisRow.status === false ){
            url = `${enableRetailer}`
        } else if (thisRow.status === true ) {
            url = `${disableRetailer}`
        }
        let retailId = thisRow.retailId
        //this.setState({data:[]})
        AuthenticationService.executeRetailerStatusUpdate(url, retailId)
        .then(response =>  {console.log('Retailer status is changed')})
        .catch(error => {console.log('There is issue while loading reatiler data')})
    }

    resetMAC(thisRow){
      let retailId = thisRow.retailId
      console.log('retails is while resetting mac'+retailId)
      const macAddress = {
        "macAddress": ''
      }
      AuthenticationService.executeResetMAC(`${registerMac}/${retailId}`,macAddress)
      .then(response =>  {})
      .catch(error => {console.log('There is issue while loading reatiler data')})
  }

    componentDidMount() {
        AuthenticationService.executeRetailers(`${getAllRetailer}`)
        .then(response => {console.log(response); this.setState({data: response.data}); })
        .catch(error => {console.log('there is problem in loading data'); this.setState({dataFetchError : true})});
    }

    render() {
        const columns = [
            { field: 'retailId', headerName: 'ID', width: 200 },
            { field: 'username', headerName: 'User Name', width: 200 },
            { field: 'balance', headerName: 'Balance' , width: 200},
            { field: 'status', headerName: 'status', width: 200},
            {
                field: 'Change Status',
                headerName: 'Change Status',
                sortable: false,
                renderCell: (params) => {
                  const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking
                    const api: GridApi = params.api;
                    const thisRow: Record<string, GridCellValue> = {};
                    api
                      .getAllColumns()
                      .filter((c) => c.field !== '__check__' && !!c)
                      .forEach(
                        (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                      );
                      this.setRetailerStatus(thisRow);
                    //return alert(JSON.stringify(thisRow, null, 4));
                  };
                  alert(params)
                  return <Button 
                    variant="contained"
                    onClick={onClick}
                    style={{fontSize: '13px', padding: 5, margin: '0px'}}
                  >Change Status</Button>;
                }, width: 250
              },
              {
                field: 'Reset MAC',
                headerName: 'Reset MAC',
                sortable: false,
                renderCell: (params) => {
                  const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking
                    const api: GridApi = params.api;
                    const thisRow: Record<string, GridCellValue> = {};
                    
                    api
                      .getAllColumns()
                      .filter((c) => c.field !== '__check__' && !!c)
                      .forEach(
                        (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                      );
                      this.resetMAC(thisRow);
                    //return alert(JSON.stringify(thisRow, null, 4));
                  };
                  return <Button 
                    variant="contained"
                    onClick={onClick}
                    style={{fontSize: '13px', padding: 5, margin: '0px'}}> Reset MAC</Button>;
                }, width: 250
              }
        ]
        return (
                <div>
                  <center>
                  <Card style={{width:'75%',marginTop:25}} >
        <CardHeader
          // subheader="Manage "
          title="View Retailers"
          />
        <Divider />
        <CardContent
          className="table-responsive"
        >
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
                  {this.state.dataFetchError && <div className="alert alert-warning">Unable to fetch the Retail Id's Data</div>}
                    <div style={{ height: 700, width: '100%' , alignContent: 'center', alignSelf: 'center'}}>
                    <DataGrid
                        getRowId={(row) => row.retailId}
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
        )
    }

}
export default ViewRetailers