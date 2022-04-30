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

import Stack from '@mui/material/Stack';

const Drawdetails = () => {

    const [value, setValue] = React.useState(null);
    const [user, setUser] = useState("");

    const handleChange = (event) => {
        setUser(event.target.value);
        };
    
  return (
    <div>
      <center>
        <Card style={{ width: "75%", marginTop: 25 }}>
          <CardHeader
            // subheader="Manage "
            title="Reports - Draw Details"
          />
          <Divider />
          <CardContent className="table-responsive">
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
                <div 
                    style={{width:'75%', alignItems:'justify', fontSize:17}}
                ><Stack component="form" noValidate spacing={3}>
                    <Box sx={{ minWidth: 120 }}>
                      Select super Distributor:
                      <Select
                        style={{ width: "35%", height: "100%" }}
                        value={user}
                        label="Super Distributor"
                        onChange={handleChange}
                      >
                        <MenuItem value={"DL001"}>DL001</MenuItem>
                        <MenuItem value={"DL002"}>DL002</MenuItem>
                        <MenuItem value={"DL003"}>DL003</MenuItem>
                      </Select>
                    </Box><br/>
                    <Box sx={{ minWidth: 120 }}>
                      Select Distributor:
                      <Select
                        style={{ width: "35%", height: "100%" }}
                        value={user}
                        label="Select Distributor"
                        onChange={handleChange}
                      >
                        <MenuItem value={"SH0001"}>SH0001</MenuItem>
                        <MenuItem value={"SH0002"}>SH0002</MenuItem>
                        <MenuItem value={"SH0003"}>SH0003</MenuItem>
                      </Select>
                    </Box><br/>
                    <Box sx={{ minWidth: 120 }}>
                      Select Retailer:
                      <Select
                        style={{ width: "35%", height: "100%" }}
                        value={user}
                        label="Select Retailer"
                        onChange={handleChange}
                      >
                        <MenuItem value={"DL0001"}>DL0001</MenuItem>
                        <MenuItem value={"DL0002"}>DL0002</MenuItem>
                        <MenuItem value={"DL0003"}>DL0003</MenuItem>
                      </Select>
                    </Box><br/>
                    <Box sx={{ minWidth: 120 }}>
                      Select Game:
                      <Select
                        style={{ width: "35%", height: "100%" }}
                        value={user}
                        label="Select Game"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Lottery"}>Lottery</MenuItem>
                        <MenuItem value={"Lottery1"}>Lottery1</MenuItem>
                        <MenuItem value={"Lottery2"}>Lottery2</MenuItem>
                      </Select>
                    </Box><br/>
                    <Box sx={{ minWidth: 120 }}>
                      Draw Date:
                      
                        <TextField
                            id="date"
                            label="DrawDate"
                            type="date"
                            defaultValue=""
                            sx={{ width: 220 }}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Box>
                    </Stack>


                    
                  <Button
                    variant="contained"
                    color="warning"
                    type='reset'
                    style={{
                      float: "right",
                      right: "5%",
                      top: 10,
                      margin: "35px 25px 30px 0",
                    }}
                    onClick={() => console.log("You have clicked me!")}
                  >
                    
                    Reset
                  </Button>
                    <Button
                    type='submit'
                    variant="contained"
                    color="primary"
                    style={{
                      float: "right",
                      right: "5%",
                      top: 10,
                      margin: "35px 25px 30px 0",
                    }}
                    onClick={() => console.log("You have clicked me!")}
                  >
                    
                    Submit
                  </Button>

                    </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </center>
    </div>
  );
};

export default Drawdetails;
