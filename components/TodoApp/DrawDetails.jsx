import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthenticationService from './AuthenticationService.js';
import { DataGrid } from '@mui/x-data-grid'
import { drawDetailsUrl } from './Constant'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import RetailerDropDown from './RetailerDropDown.jsx'

class DrawDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dropDownValue: '',
            startDate: new Date(),
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitData = this.submitData.bind(this)
        this.handleDropDownChange = this.handleDropDownChange.bind(this)
        this.populateDataInTable = this.populateDataInTable.bind(this)
        this.handleCallback = this.handleCallback.bind(this)
    }

    handleCallback(childData) {
        this.setState({dropDownValue: childData})
    }

    render() {
        const columns = [
            { field: 'id', headerName: 'ID', width: 200 },
            { field: 'draw', headerName: 'Draw Time', width: 200 },
            { field: 'setPoints', headerName: 'Set Points', width: 200 },
            { field: 'wonPoints', headerName: 'Won Points', width: 200 },
            { field: 'betCount', headerName: 'Total Bet Count', width: 200 },
            { field: 'winCount', headerName: 'Bet Won Count', width: 200 },
            { field: 'winNumbers', headerName: 'Winning Numbers', width: 200 },
        ]
        return (

            <div>
             <div className="col-sm-10">
             <RetailerDropDown parentCallback={this.handleCallback}/>
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
                    <button onClick={this.submitData} className='btn btn-success'>Get Draw Details</button>
                </div>
                <div style={{
                    height: 400,
                    width: "100%",
                    textAlign: "center"
                }}>
                    <DataGrid
                        rows={this.state.data}
                        columns={columns}
                        pageSize={100}
                    />
                </div>
            </div>

        );
    }

    handleDropDownChange(event) {
        this.setState({ dropDownValue: event.target.value })
    }

    handleChange(date) {
        this.setState({ startDate: date })
    }

    submitData() {
        AuthenticationService.executeRetailerTicket(`${drawDetailsUrl}`, new Date(this.state.startDate).toLocaleDateString("sv-SE", { year: 'numeric', month: 'numeric', day: 'numeric' }), this.state.dropDownValue)
            .then(response => this.populateDataInTable(response))
            .catch()
        console.log(new Date(this.state.startDate).toLocaleDateString("sv-SE", { year: 'numeric', month: 'numeric', day: 'numeric' }) + ' ' + this.state.dropDownValue)
    }

    populateDataInTable(response) {
        console.log(response.data)
        this.setState({
            data: response.data
        });
    }

}

export default DrawDetails;