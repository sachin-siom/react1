import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { addRetailerBalance } from './Constant'
import RetailerDropDown from './RetailerDropDown.jsx'
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
            retailerid : ''
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleAddButtonSubmit = this.handleAddButtonSubmit.bind(this);
        this.handleRemoveButtonSubmit = this.handleRemoveButtonSubmit.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
        this.resetStatus = this.resetStatus.bind(this);
    }

    handleClose() {
        this.setState({
            balance: ''
        })
        this.resetStatus();
    }

    handleAddButtonSubmit() {
        this.resetStatus();
        const balanceData = {
            "balance": this.state.balance
        }
        console.log(balanceData)
        console.log(this.state.retailerid)
        AuthenticationService.executeRetailerBalance(addRetailerBalance, this.state.retailerid, balanceData)
            .then((response) => { this.setState({balanceUpdated: true}); console.log('balance updated successfully') })
            .catch((error) => { this.setState({balanceNotUpdated: true}); console.log('balance update failure' + error) })
    }

    handleRemoveButtonSubmit() {
        this.resetStatus();
        const balanceData = {
            "balance": -this.state.balance
        }
        console.log(balanceData)
        console.log(this.state.retailerid)
        AuthenticationService.executeRetailerBalance(addRetailerBalance, this.state.retailerid, balanceData)
            .then((response) => { this.setState({balanceUpdated: true});  console.log('balance updated successfully') })
            .catch((error) => { this.setState({balanceNotUpdated: true});  console.log('balance update failure' + error) })
    }

    resetStatus(){
        this.setState({balanceUpdated: false});
        this.setState({balanceNotUpdated: false});
    }

    setProperty(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({[e.target.name]: e.target.value})
         }
    }

    handleCallback = (childData) =>{
        console.log('data came form chile domponant:'+childData)
        this.setState({retailerid: childData})
    }


    render() {
        return (
            <>
            <center>
            <Card style={{ width: "75%", marginTop: 25 }}>
            <CardHeader
              // subheader="Manage "
              title="Add Retailer Balance"
            />
            <Divider />
            {this.state.balanceUpdated && (<div className="alert alert-success">Balance Updated</div>)}
            {this.state.balanceNotUpdated && (<div className="alert alert-danger">Balance Not Updated</div>)}
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
            <RetailerDropDown parentCallback = {this.handleCallback}/>
            <TextField style={{width:'35%'}} id="outlined-basic" label="New Balance" variant="outlined" name="balance" required value={this.state.balance}
             onChange={this.setProperty} />
            <div>
                <Button type="submit" variant="contained" color="primary" onClick={this.handleAddButtonSubmit} style={{margin:8}}>
                    Add Balance
                </Button>
                <Button type="submit" variant="contained" color="success" onClick={this.handleRemoveButtonSubmit} style={{margin:8}}>
                    Remove Balance
                </Button>
                <Button variant="contained" onClick={this.handleClose} style={{margin:8}}>
                    Reset
                </Button>

            </div>
            </Grid>
            </Grid>
            </CardContent>
            </Card>
            </center>
            </>
        )
    }
}
export default AddRetailerBalance