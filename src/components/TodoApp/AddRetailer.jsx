import React, { Component, useState, useStyles } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthenticationService from "./AuthenticationService";
import { addRetailer } from './Constant'

class AddRetailer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            profitPercentage: ''
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setProperty = this.setProperty.bind(this);

    }

    handleClose() {
        this.setState({
            userName: '',
            password: '',
            profitPercentage: ''
        })
    }

    handleSubmit() {
        const newRetailerData = {
            "password": this.state.password,
            "profitPercentage": this.state.profitPercentage,
            "username": this.state.userName
        }
        AuthenticationService.addRetailer(addRetailer, newRetailerData)
            .then((response) => { })
            .catch((error) => { })
        console.log(this.state.userName, this.state.password, this.state.profitPercentage)
    }


    setProperty(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <>
                <TextField id="outlined-basic" label="User Name" variant="outlined" name="userName" required value={this.state.userName}
                 onChange={this.setProperty} />
                <TextField id="outlined-basic" label="Password" variant="outlined" name="password" required value={this.state.password}
                 onChange={this.setProperty} />
                 <TextField id="outlined-basic" label="Commission %" variant="outlined" name="profitPercentage" required value={this.state.profitPercentage}
                 onChange={this.setProperty} />
                <div>
                    <Button type="submit" variant="contained" color="primary" onClick={this.handleSubmit}>
                        Add Retailer
                    </Button>
                    <Button variant="contained" onClick={this.handleClose}>
                        Reset
                    </Button>

                </div>
            </>
        )
    }
}
export default AddRetailer