import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthenticationService from "./AuthenticationService";
import { addRetailerBalance } from './Constant'
import RetailerDropDown from './RetailerDropDown.jsx'

class AddRetailerBalance extends Component {

    constructor(props) {
        super(props)
        this.state = {
            balance: '',
            retailerid : ''
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
    }

    handleClose() {
        this.setState({
            balance: ''
        })
    }

    handleSubmit() {
        const balanceData = {
            "balance": this.state.balance
        }
        console.log(balanceData)
        console.log(this.state.retailerid)
        AuthenticationService.executeRetailerBalance(addRetailerBalance, this.state.retailerid, balanceData)
            .then((response) => { })
            .catch((error) => { })
    }


    setProperty(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleCallback = (childData) =>{
        console.log('data came form chile domponant:'+childData)
        this.setState({retailerid: childData})
    }


    render() {
        return (
            <>
            <RetailerDropDown parentCallback = {this.handleCallback}/>
            <TextField id="outlined-basic" label="New Balance" variant="outlined" name="balance" required value={this.state.balance}
             onChange={this.setProperty} />
            <div>
                <Button type="submit" variant="contained" color="primary" onClick={this.handleSubmit}>
                    Add Balance
                </Button>
                <Button variant="contained" onClick={this.handleClose}>
                    Reset
                </Button>

            </div>
            </>
        )
    }
}
export default AddRetailerBalance