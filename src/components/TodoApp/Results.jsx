import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import {
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { openController } from "./Constant";
import AuthenticationService from "./AuthenticationService";
import withNavigation from './WithNavigation.jsx'
import LoginComponent from "./LoginComponent.jsx";
const Results = () => {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    AuthenticationService.executeopenController(`${openController}`)
    .then((response) => {fetchUsers(response.data) })
    .catch((error) => {console.log('problem in retiving winners list');});
  
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(Users)

  const LoginComponentWithNavigation = withNavigation(LoginComponent);
  const columns1 = [
    { field: 'drawTime', headerName: 'Sr No', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'date', headerName: 'Date', width: 100 , headerAlign: 'center', align: 'center'},
    { field: '_1_100', headerName: '1-100', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_101_200', headerName: '101-200', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_201_300', headerName: '201-300', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_301_400', headerName: '301-400', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_401_500', headerName: '401-500', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_501_600', headerName: '501-600', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_601_700', headerName: '601-700', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_701_800', headerName: '701-800', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_801_900', headerName: '801-900', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_901_1000', headerName: '901-1000', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_1001_1100', headerName: '1001-1100', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_1101_1200', headerName: '1101-1200', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_1201_1300', headerName: '1201-1300', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_1301_1400', headerName: '1301-1400', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_1401_1500', headerName: '1401-1500', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_1501_1600', headerName: '1501-1600', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_1601_1700', headerName: '1601-1700', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_1701_1800', headerName: '1701-1800', width: 80, headerAlign: 'center', align: 'center'},
    { field: '_1801_1900', headerName: '1801-1900', width: 80, headerAlign: 'center', align: 'center'},
    
  ]

  return (
    <>
      <center>
        <Card style={{ width: "97%", marginTop: "5%" }}>
          <CardHeader title="Result" />
          <Button
            variant="contained"
            color="success"
            style={{ float:"right", marginRight: "5%" ,marginTop: "2%"}}
          >
          <Link to='/login' style={{color:'white'}}>
          Login</Link></Button>
          <Divider style={{marginBottom: "15px"}} />
          <CardContent className="table-responsive">
          <DataGrid
                      getRowId={(row) => row.drawTime}
                      autoHeight {...Users}
                      rows={Users}
                      columns={columns1}
                    />
            
          </CardContent>
        </Card>
        <Routes>
                       
              <Route path="/login" exact element={<LoginComponentWithNavigation />}/> 
        </Routes>
      </center>
    </>
  );
};

export default Results;
