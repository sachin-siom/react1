import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import { getAllRetailer } from './Constant'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import { enableRetailer, disableRetailer, registerMac } from './Constant'
import AddRetailerBalance from './AddRetailerBalance';

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
      macNotReset: false,
      macReset: false,
      dataFetchError: false
    };
    this.activateDeactivateRetailer = this.activateDeactivateRetailer.bind(this);
    this.resetMAC = this.resetMAC.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.reload = this.reload.bind(this);
  }

  activateDeactivateRetailer(thisRow) {
    let url = ''
    if (thisRow.id === 1)
      return
    if (thisRow.status === 'De-Activated') {
      url = `${enableRetailer}`
    } else if (thisRow.status === 'Activated') {
      url = `${disableRetailer}`
    }
    let retailId = thisRow.retailId
    AuthenticationService.executeRetailerStatusUpdate(url, retailId)
      .then(response => { this.reload(); console.log('Retailer status is changed') })
      .catch(error => { console.log('There is issue while loading reatiler data') })

  }

  handleCallback(childData) {
    this.reload();
    this.setState({ macNotReset: false });
    this.setState({ macReset: false });
  }

  resetMAC(thisRow) {
    let retailId = thisRow.retailId
    console.log('retails is while resetting mac' + retailId)
    const macAddress = {
      "macAddress": ''
    }
    AuthenticationService.executeResetMAC(`${registerMac}/${retailId}`, macAddress)
      .then(response => { this.setState({ macReset: true }); })
      .catch(error => { this.setState({ macNotReset: true }); console.log('There is issue while loading reatiler data') })
  }

  componentDidMount() {
    this.reload()
  }

  reload() {
    AuthenticationService.executeRetailers(`${getAllRetailer}`)
      .then(response => { this.setState({ data: response.data }); })
      .catch(error => { console.log('there is problem in loading data'); this.setState({ dataFetchError: true }) });
  }

  render() {
    const columns = [
      { field: 'retailId', headerName: 'Retailer ID', width: 90, headerAlign: 'center', align: 'center'},
      { field: 'username', headerName: 'User Name', width: 180, headerAlign: 'center' , align: 'center'},
      { field: 'balance', headerName: 'Balance', width: 100 , headerAlign: 'center', align: 'center'},
      {
        field: 'status',
        headerName: 'Change Status',
        sortable: false,
        renderCell: (params) => {
          const onClick = (e) => {
            e.stopPropagation();
            const api: GridApi = params.api;
            const thisRow: Record<string, GridCellValue> = {};
            api
              .getAllColumns()
              .filter((c) => c.field !== '__check__' && !!c)
              .forEach(
                (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
              );
            this.activateDeactivateRetailer(thisRow);
          };
          return <Button
            variant="contained"
            onClick={onClick}
            style={{ fontSize: '13px', padding: 5, margin: '0px' }}
          >{params.value}</Button>;
        }, width: 150, headerAlign: 'center', align: 'center'
      },
      {
        field: 'live',
        headerName: 'Live',
        sortable: false,
        renderCell: (params) => {
          const onClick = (e) => {
            e.stopPropagation();
            const api: GridApi = params.api;
            const thisRow: Record<string, GridCellValue> = {};
            api
              .getAllColumns()
              .filter((c) => c.field !== '__check__' && !!c)
              .forEach(
                (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
              );
            this.activateDeactivateRetailer(thisRow);
          };
          return <Button
            variant="contained"
            //onClick={onClick}
            style={{ fontSize: '13px', padding: 5, margin: '0px' }}
          >{params.value}</Button>;
        }, width: 150, headerAlign: 'center', align: 'center'
      },
      {
        field: 'Reset MAC',
        headerName: 'Reset MAC',
        sortable: false,
        renderCell: (params) => {
          const onClick = (e) => {
            e.stopPropagation();
            const api: GridApi = params.api;
            const thisRow: Record<string, GridCellValue> = {};

            api
              .getAllColumns()
              .filter((c) => c.field !== '__check__' && !!c)
              .forEach(
                (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
              );
            this.resetMAC(thisRow);
          };
          return <Button
            variant="contained"
            onClick={onClick}
            style={{ fontSize: '13px', padding: 5, margin: '0px' }}> Reset MAC</Button>;
        }, width: 250, headerAlign: 'center', align: 'center'
      }
    ]
    return (
      <div>
        <center>
          <Card style={{ width: "95%", marginTop: '1%', marginBottom: '5%'}} >
            <AddRetailerBalance parentCallback={this.handleCallback} />

            <CardHeader
              title="View Retailers"
            />
            <Divider />
            {this.state.macReset && (
              <div className="alert alert-success">MAC reset Successifully</div>
            )}
            {this.state.macNotReset && (
              <div className="alert alert-danger">Error occured</div>
            )}
            <CardContent
              className="table-responsive"
            >
              <Grid container spacing={6} wrap="wrap">
                <Grid
                  item
                  md={16}
                  sm={18}
                  xs={20}
                >
                  {this.state.dataFetchError && <div className="alert alert-warning">Unable to fetch the Retail Id's Data</div>}
                  <div style={{ height: 400, width: '100%', alignContent: 'center', alignSelf: 'center' }}>
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