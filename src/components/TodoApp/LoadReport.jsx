import React, { useEffect, useState } from "react";
import AuthenticationService from "./AuthenticationService";
import { loadReport } from "./Constant";
import LoginComponent from "./LoginComponent.jsx";
import withNavigation from './WithNavigation.jsx';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";


const LoadReport = () => {
  const [Users, fetchUsers] = useState([])
  const [coll, totalCol] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const LoginComponentWithNavigation = withNavigation(LoginComponent);

  function getRandomColor() {
    var color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }


  const customToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const getData = () => {
    AuthenticationService.executLoadReport(`${loadReport}`)
      .then((response) => { totalCol(response.data.totalCollectionAmt); formatData(response.data.loadData); })
      .catch((error) => { console.log('problem in retiving winners list'); });
  }

  const propsRowStyle = (rowData, index) => ({
    backgroundColor: rowData.wonPoints > 0 ? '#90EE90' : '#fff',
  })

  const formatData = (response) => {
    fetchUsers(response);
  }

  const columns = [
    {
      field: "number",
      headerName: "Number",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "betCount",
      headerName: "Bet Count",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "betAmount",
      headerName: "Bet Amount",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "retailId",
      headerName: "Retail Id",
      width: 200,
      headerAlign: "center",
      align: "center",
    }]

  return (
    <>
    <h2>Total Collection: {coll}</h2>
      <center>
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
            <DataGrid
              autoHeight {...Users}
              style={{ display: "flex", height: '100%' }}
              getRowId={(row) => row.number}
              rows={Users}
              columns={columns}
              pageSize={15}
              components={{ Toolbar: customToolbar }}
              loading={Users.length === 0}
            />
        </div>

      </center>
    </>
  );
};

export default LoadReport;
