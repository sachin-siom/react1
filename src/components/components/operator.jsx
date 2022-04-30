import React, {useState} from "react";
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


const Operator = () => {
    const [user, setUser] = useState('');

    const handleChange = (event) => {
        setUser(event.target.value);
      };
    
      const users = [
        {
          srno: 1,
          adminType: "Test",
          startFrom: "ABC",
          upTo: "XYZ",
          bonus: 0.00,
          createdOn: 'date',
        },
      ];
  return (
    <div>
      <center>
      <Card style={{width:'75%',marginTop:25}} >
        <CardHeader
          // subheader="Manage "
          title="Operator Bonus"
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
    
      <center className="table-responsive">
          <table
            style={{ width: "95%",alignItem:'center', right: 0, margin: 25 }}
            className="table  table-hover "
          >
            <thead>
              <tr className="bg-primary">
                <th scope="col">Sr.</th>
                <th scope="col">Admin Type</th>
                <th scope="col">Start From</th>
                <th scope="col">UpTo</th>
                <th scope="col">Bonus %</th>
                <th scope="col">Created on</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <th scope="row">{user.srno}</th>
                  <td>{user.adminType}</td>
                  <td>{user.startFrom}</td>
                  <td>{user.upTo}</td>
                  <td>{user.bonus}</td>
                  <td>{user.createdOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Divider style={{ marginTop: 10, width: "75%" }} />
        <Button variant="contained" color="primary" style={{ float:'right', right:'5%',top:10,marginBottom:'50px'}} onClick={()=>console.log("You have clicked me!")}>Add New </Button>
      
        </center>
        </Grid>
      </Grid>
        </CardContent>
      </Card>
      </center>
    </div>
  );
};

export default Operator;
