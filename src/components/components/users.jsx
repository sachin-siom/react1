import React from "react";
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

const users = [
  {
    srno: 1,
    type: "Distributor",
    loginID: "D001",
    parentID: "DL001",
    fullName: "Xyzzz",
    createdAt: new Date(),
  },
  {
    srno: 2,
    type: "Distributor",
    loginID: "D001",
    parentID: "DL001",
    fullName: "Xyzzz",
    createdAt: new Date(),
  },
  {
    srno: 3,
    type: "Distributor",
    loginID: "D001",
    parentID: "DL001",
    fullName: "Xyzzz",
    createdAt: new Date(),
  },
  {
    srno: 4,
    type: "Distributor",
    loginID: "D001",
    parentID: "DL001",
    fullName: "Xyzzz",
    createdAt: new Date(),
  },
];
const Users = () => {
  return (
    <>
    <center>
      <Card style={{width:'75%',marginTop:25}} >
        <CardHeader
          // subheader="Manage "
          title="Users - View"
          />
        <Divider />
        <CardContent
          className="table-responsive"
        >
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
                  <table
                className="table table-hover "
                  >
                    <thead>
                      <tr className="bg-primary">
                        <th scope="col">Sr.</th>
                        <th scope="col">Type</th>
                        <th scope="col">Login ID</th>
                        <th scope="col">Parent ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Created On</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr>
                          <th scope="row">{user.srno}</th>
                          <td>{user.type}</td>
                          <td>{user.loginID}</td>
                          <td>{user.parentID}</td>
                          <td>{user.fullName}</td>
                          <td>date</td>
                          <td>Action</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </center>
    </>
  );
};

export default Users;
