import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Divider
} from "@mui/material";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMsg: false,
    };
    // this.handleUserNameChange = this.handleUserNameChange.bind(this)
    // this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
    //this.ShowInvalidCredentials = this.ShowInvalidCredentials.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginClicked() {
    //dummy, dummy
    /*if(){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            //this.props.history.push("/welcome")
            this.props.navigate(`/welcome/${this.state.username}`)
            this.setState({hasLoginFailed : false})
            this.setState({showSuccessMsg : true})
        } else {
            this.setState({hasLoginFailed : true})
            this.setState({showSuccessMsg : false})
        }*/
    AuthenticationService.executeBasicAuthService(
      this.state.username,
      this.state.password
    )
      .then(() => {
        AuthenticationService.registerSuccessfulLogin(
          this.state.username,
          this.state.password
        );
        this.props.navigate(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ hasLoginFailed: true });
        this.setState({ showSuccessMsg: false });
      });
  }

  // handleUserNameChange (event) {
  //     console.log(event.target.value)
  //     this.setState({[event.target.name] : event.target.value})
  // }

  // handlePasswordChange (event) {
  //     console.log(event.target.value)
  //     this.setState({password : event.target.value})
  // }

  render() {
    return (
      <div>
        <center>
        <Card style={{ width: "75%", marginTop: 25 ,marginBottom:35}}>
          
          <CardContent className="table-responsive banner04">
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
        <center>
          <Typography
            fontWeight={600}
            fontFamily={"BlinkMacSystemFont"}
            variant="h2"
            color="black"
            component="div"
            gutterBottom
            align="center"
          >
            Login
          </Typography>
          <Divider/>
          <div
            style={{
              padding: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
            {this.state.hasLoginFailed && (
              <div className="alert alert-warning">Invalid Credentials</div>
            )}
            {this.state.showSuccessMsg && <div>Login Success</div>}
            {/*<ShowSuccessfulLogin showSuccessMsg={this.state.showSuccessMsg}/>*/}
            <TextField
              required
              id="outlined-name"
              label="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              style={{ margin: 8, backgroundColor: "white" }}
            />
            <br />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              style={{ margin: 8, backgroundColor: "white" }}
            />
            <br />
            {/* User Name: <input type="text" name = "username" value={this.state.username} onChange = {this.handleChange}/> */}
            {/* Password: <input type="password" name = "password" value={this.state.password} onChange = {this.handleChange}/> */}

            <Button
              variant="contained"
              color="success"
              onClick={this.loginClicked}
              style={{ margin: 8, marginTop: 16, fontWeight: 550 }}
            >
              Login
            </Button>
        </div>
        </center>
        </Grid>
        </Grid>
        </CardContent>
        </Card>
        </center>
      </div>
    );
  }
}

// const styles = {
//     TextField : {
//         margin : "10px"
//     }
// }

export default LoginComponent;
