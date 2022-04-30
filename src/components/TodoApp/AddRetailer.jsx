import React, { Component, useState, useStyles } from "react";
import AuthenticationService from "./AuthenticationService";
import { addRetailer } from "./Constant";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

class AddRetailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      profitPercentage: "",
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setProperty = this.setProperty.bind(this);
  }

  handleClose() {
    this.setState({
      userName: "",
      password: "",
      profitPercentage: "",
    });
  }

  handleSubmit() {
    const newRetailerData = {
      password: this.state.password,
      profitPercentage: this.state.profitPercentage,
      username: this.state.userName,
    };
    AuthenticationService.addRetailer(addRetailer, newRetailerData)
      .then((response) => {})
      .catch((error) => {});
    console.log(
      this.state.userName,
      this.state.password,
      this.state.profitPercentage
    );
  }

  setProperty(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <>
        <center>
          <Card style={{ width: "75%", marginTop: 25 }}>
            <CardHeader
              // subheader="Manage "
              title="Add Retailer"
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
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="User Name"
                      variant="outlined"
                      name="userName"
                      required
                      value={this.state.userName}
                      onChange={this.setProperty}
                      style={{ margin: 8, width:'25%' }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                      name="password"
                      required
                      value={this.state.password}
                      onChange={this.setProperty}
                      style={{ margin: 8, width:'25%'  }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Commission %"
                      variant="outlined"
                      name="profitPercentage"
                      required
                      value={this.state.profitPercentage}
                      onChange={this.setProperty}
                      style={{ margin: 8, width:'25%'  }}
                    />
                    <div>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                        style={{ margin: 8 }}
                      >
                        Add Retailer
                      </Button>
                      <Button variant="contained" onClick={this.handleClose}>
                        Reset
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </center>
      </>
    );
  }
}
export default AddRetailer;
