import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
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

const Commissionreport = () => {
  const [user, setUser] = useState("");

  const buttons = [
    "This Week",
    "Previous Week",
    "Last Month",
    "Today",
    "Yesterday",
    "Custon date",
  ];

  const [active, setActive] = useState(buttons[0]);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const users = [
    {
      srno: 1,
      username: "Test",
      from: "ABC",
      to: "XYZ",
      commission: "Gross: ",
      played: 0.0,
      won: 0.0,
      consumed: 0.0,
      mainCommission: 0.0,
    },
  ];
  return (
    <div>
      <center>
        <Card style={{ width: "75%", marginTop: 25,marginBottom: 35 }}>
          <CardHeader
            title="Reports Commission "
          />
          <Divider />
          <CardContent>
            <Grid container spacing={6} wrap="wrap">
              <Grid
                item
                md={16}
                sm={18}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                xs={20}
              >
                <center>
                  <div style={{ marginTop: 10, marginRight: 10 }}>
                    <Box sx={{ minWidth: 120 }}>
                      User:
                      <Select
                        id='user'
                        style={{ width: "35%", height: "100%" }}
                        value={user}
                        label="User"
                        onChange={handleChange}
                      >
                        <MenuItem value={"User1"}>User1</MenuItem>
                        <MenuItem value={"User2"}>User2</MenuItem>
                        <MenuItem value={"User3"}>User3</MenuItem>
                      </Select>
                    </Box>
                  </div>
                  Select Date:
                  <div>
                    {buttons.map((button) => (
                      <Button
                        style={{ marginTop: 10, marginRight: 10, padding: 10 }}
                        variant="contained"
                        color="primary"
                        key={button}
                        active={active === button}
                        onClick={() => setActive(button)}
                      >
                        {button}
                      </Button>
                    ))}
                  </div>
                  <br />
                  Report for:
                  <Button variant="contained" color="secondary">
                    {active}
                  </Button>
                  <br />
                  From : Date-time <span> </span> To:Date-time
                  <br />
                  <Divider style={{ marginTop: 10, width: "75%" }} />
                  <center className="table-responsive">
                    <table
                      style={{
                        width: "75%",
                        alignItem: "center",
                        right: 0,
                        margin: 25,
                      }}
                      className="table  table-hover "
                    >
                      <thead>
                        <tr className="bg-primary">
                          <th scope="col">Sr.</th>
                          <th scope="col">username</th>
                          <th scope="col">From</th>
                          <th scope="col">To</th>
                          <th scope="col">%Commission</th>
                          <th scope="col">Points Played</th>
                          <th scope="col">Points Won</th>
                          <th scope="col">Points Consumed</th>
                          <th scope="col">Commission</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr>
                            <th scope="row">{user.srno}</th>
                            <td>{user.username}</td>
                            <td>{user.from}</td>
                            <td>{user.to}</td>
                            <td>{user.commission}</td>
                            <td>{user.played}</td>
                            <td>{user.won}</td>
                            <td>{user.consumed}</td>
                            <td>{user.mainCommission}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </center>
                  <Divider style={{ marginTop: 10, width: "75%" }} />
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#c9b500",
                      float: "right",
                      right: "5%",
                      top: 10,
                      margin: "35px 25px 30px 0",
                    }}
                    onClick={() => console.log("You have clicked me!")}
                  >
                    
                    Print
                  </Button>
                </center>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </center>
    </div>
  );
};

export default Commissionreport;
