import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import {getAllRetailer} from './Constant'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import Button from '@mui/material/Button';
import {enableRetailer, disableRetailer} from './Constant'

class ViewRetailers extends Component {

    constructor(props) {
        super(props)
        this.state = {
          data: [],
          dataFetchError: false
        };
        this.setRetailerStatus = this.setRetailerStatus.bind(this)
    }

    setRetailerStatus(thisRow){
        let url = ''
        if(thisRow.button === 'enable' ){
            url = `${enableRetailer}`
        } else if (thisRow.button === 'disable' ) {
            url = `${disableRetailer}`
        }
        let retailId = thisRow.retailId
        AuthenticationService.executeRetailerStatusUpdate(url, retailId)
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
                field: 'enable',
                headerName: 'Enable',
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
                      thisRow['button'] = params.field;
                      this.setRetailerStatus(thisRow);
                    //return alert(JSON.stringify(thisRow, null, 4));
                  };
            
                  return <Button onClick={onClick}>Enable</Button>;
                },
              },
              {
                field: 'disable',
                headerName: 'Disable',
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
                      thisRow['button'] = params.field;
                      this.setRetailerStatus(thisRow);
                  };
            
                  return <Button onClick={onClick}>Disable</Button>;
                },
              }
        ]
        return (
                <div>
                  {this.state.dataFetchError && <div className="alert alert-warning">Unable to fetch the Retail Id's Data</div>}
                    <div style={{ height: 700, width: '100%' , alignContent: 'center', alignSelf: 'center'}}>
                    <DataGrid
                        getRowId={(row) => row.retailId}
                        rows={this.state.data}
                        columns={columns}
                        pageSize={100}
                    />
                </div>
            </div>
        )
    }

}
export default ViewRetailers