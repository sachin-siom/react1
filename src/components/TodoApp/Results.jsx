import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";

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
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";

// componentDidMount() {
  // AuthenticationService.executeopenController(`${openController}`)
  // .then((response) => { this.setState({ retailIds: response.data }); })
  // .catch((error) => {console.log('problem in retiving retailers id'); this.setState({dataFetchError : true})});
// }

const Results = () => {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    AuthenticationService.executeopenController(`${openController}`)
    .then((response) => {fetchUsers(response.data) })
    .catch((error) => {console.log('problem in retiving retailers id');});
  
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(Users)

  // const testsize = 10;
  // if(testsize <= 0) throw "Error";
  // const arr=[]
  // for( let i=0; i< Users[2].winnerNumber.length; i += testsize ) {

  //   const users = Users[2].winnerNumber.slice(i, i+ testsize);
  //   console.log(users)
  // }

  
  const testrows = [...Array( Math.ceil(Users[0].winnerNumber.length / 10) )];

  const productRows = testrows.map( (row, idx) => Users[0].winnerNumber.slice(idx * 10, idx * 10 +10) );
  console.log(productRows)
  // map the rows as div.row
  // for ( let i=0; i<testrows.length; i++ ) {
  //   testrows[i] = [...Array(10)];
  //   console.log(testrows[i])
  // }


  const sampleData = [
    
    {
      productRows,
    },
  ];

  // for(let i=0; i<productRows.length; i++) {
  //   const datat = sampleData[0].productRows[i];
  // }
  const data = React.useMemo(
    () => [
      sampleData[0],
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "",
        accessor: "col2",
      },
      {
        Header: " ",
        accessor: "col3", // accessor is the "key" in the data
      },
      {
        Header: "",
        accessor: "col4", // accessor is the "key" in the data
      },
      {
        Header: "",
        accessor: "col5",
      },
      {
        Header: " ",
        accessor: "col6", // accessor is the "key" in the data
      },
      {
        Header: "",
        accessor: "col7", // accessor is the "key" in the data
      },
      {
        Header: "",
        accessor: "col8",
      },
      {
        Header: " ",
        accessor: "col9", // accessor is the "key" in the data
      },
      {
        Header: " ",
        accessor: "col10", // accessor is the "key" in the data
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}  -  ${current.getHours()}:${current.getMinutes()}`;
  //We can use setInterval to update the time every 15 minutes
//   let timer = setInterval(function() {
    // we can write our code here
//     console.log('done');
//   }, 1000*60*15);
  return (
    <>
      <center>
        <Card style={{ width: "97%", marginTop: "5%" }}>
          <CardHeader title="Result" />
          <Divider style={{marginBottom: "15px"}} />
          {/* Show current date */}
          <h3>{date}</h3>
          <CardContent className="table-responsive">
            {/* to get many tables we need to map the data */}
              <table
                {...getTableProps()}
                style={{
                  border: "solid 1px black",
                  width: "100%",
                  backgroundColor: "#B4FF9F",
                  textAlign: "center",
                }}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          style={{
                            borderBottom: "solid 3px red",
                            color: "black",
                          }}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: "10px",
                                border: "solid 1px gray",
                              }}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
          </CardContent>
        </Card>
      </center>
    </>
  );
};

export default Results;
