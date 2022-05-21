import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { addRetailerBalance, lastXtxn } from "./Constant";
import RetailerDropDown from "./RetailerDropDown.jsx";
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Radio,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  TextField,
} from "@mui/material";

class AddRetailerBalance extends Component {

  constructor(props) {
    super(props)
    this.state = {
      balance: '',
      retailerid: '',
      data:[],
      lastXData: false
    }
    this.handleClose = this.handleClose.bind(this);
    this.addRetailerBalance = this.addRetailerBalance.bind(this);
    this.deductRetailerBalance = this.deductRetailerBalance.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.resetStatus = this.resetStatus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dispayLastTxn = this.dispayLastTxn.bind(this);
    this.checkEmpty = this.checkEmpty.bind(this);
    this.checkRetailId = this.checkRetailId.bind(this);
  }

  checkRetailId() {
    if (this.state.retailerid) {
      return false;
    }
    alert("retailer id not selected")
    return true;
  }

  checkEmpty() {
    if (this.state.balance) {
      return false;
    }
    alert("text box is empty")
    return true;
  }

  addRetailerBalance() {
    if (this.checkEmpty() || this.checkRetailId()) {
      return;
    }
    this.resetStatus();
    const balanceData = {
      "balance": this.state.balance
    }
    AuthenticationService.executeRetailerBalance(addRetailerBalance, this.state.retailerid, balanceData)
      .then((response) => { this.setState({ balanceUpdated: true }); this.handleChange(); console.log('balance updated successfully') })
      .catch((error) => { this.setState({ balanceNotUpdated: true }); console.log('balance update failure' + error) })
  }

  deductRetailerBalance() {
    if (this.checkEmpty() || this.checkRetailId()) {
      return;
    }
    this.resetStatus();
    const balanceData = {
      "balance": -this.state.balance
    }
    console.log(balanceData)
    console.log(this.state.retailerid)
    AuthenticationService.executeRetailerBalance(addRetailerBalance, this.state.retailerid, balanceData)
      .then((response) => { this.setState({ balanceUpdated: true }); this.handleChange(); console.log('balance updated successfully') })
      .catch((error) => { this.setState({ balanceNotUpdated: true }); console.log('balance update failure' + error) })
  }

  dispayLastTxn() {
    if (this.checkEmpty() || this.checkRetailId()) {
      return;
    }
    this.setState({lastXData: true})
    AuthenticationService.executeLastXTxn(lastXtxn, this.state.retailerid, this.state.balance)
      .then((response) => { this.setState({data: response.data}); console.log('last x txns shown successfully') })
      .catch((error) => { console.log('txn show failure' + error) })
  }

  handleChange() {
    this.props.parentCallback();
  }

  handleClose() {
    this.setState({
      balance: ''
    })
    this.resetStatus();
    this.props.parentCallback();
  }

  resetStatus() {
    this.setState({lastXData: false})
    this.setState({ balanceUpdated: false });
    this.setState({ balanceNotUpdated: false });
  }

  setProperty(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleCallback = (childData) => {
    console.log('data came form chile domponant:' + childData)
    this.setState({ retailerid: childData })
  }


  render() {
    const columns = [
      { field: 'no', headerName: 'Sr No', width: 20 },
      { field: 'amount', headerName: 'Amount', width: 100 },
      { field: 'date', headerName: 'Date', width: 200 }
    ]
    return (
      <>
        <center>
          <Card style={{ width: "95%", marginTop: '1%', marginBottom: '5%'}}>
            <CardHeader
              title="Add Retailer Balance"
            />
            <Divider />
            {this.state.balanceUpdated && (
              <div className="alert alert-success">Balance Updated</div>
            )}
            {this.state.balanceNotUpdated && (
              <div className="alert alert-danger">Balance Not Updated</div>
            )}
            <CardContent className="table-responsive">
              <Grid container spacing={6} wrap="wrap">
                <Grid
                  item
                  md={16}
                  sm={18}
                  xs={20}
                >
                  <RetailerDropDown parentCallback={this.handleCallback} />
                  <TextField style={{ width: '100%' }} id="outlined-basic" label="Balance/txn" variant="outlined" name="balance" required value={this.state.balance}
                    onChange={this.setProperty} />
                  <div>
                    <Button type="submit" variant="contained" color="primary" onClick={this.addRetailerBalance} style={{ margin: 8 }}>
                      Add Balance
                    </Button>
                    <Button type="submit" variant="contained" color="success" onClick={this.deductRetailerBalance} style={{ margin: 8 }}>
                      Remove Balance
                    </Button>
                    <Button type="submit" variant="contained" color="success" onClick={this.dispayLastTxn} style={{ margin: 8 }}>
                      Show Last txn
                    </Button>
                    <Button variant="contained" onClick={this.handleClose} style={{ margin: 8 }}>
                      Reset
                    </Button>
                    {this.state.lastXData && (
                    <div style={{ height: 300, width: '100%', alignContent: 'center', alignSelf: 'center' }}>
                    <DataGrid
                      getRowId={(row) => row.no}
                      rows={this.state.data}
                      columns={columns}
                      pageSize={this.state.balance}
                    />
                  </div>)}
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </center>
      </>
    );
  }
}
export default AddRetailerBalance;
