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
  TextField
} from "@mui/material";
import RadioGroup from '@mui/material/RadioGroup';


const Settings = (props) => {



  return (
    <>
    <center>
    <form style={{width:'75%',marginTop:25}} {...props}>
      <Card>
        <CardHeader
          // subheader="Manage "
          title="Settings"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid
              item
              md={4}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              xs={12}
            >
              <Typography color="textPrimary" gutterBottom variant="h6">
                User Login
              </Typography>
              <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="enable"
          name="radio-buttons-group"
      > 
              <FormControlLabel
              value='enable'
                control={<Radio color="primary" defaultChecked />}
                label="Enable"
              />
              <FormControlLabel
               value='disable'
                control={<Radio  color="primary" />}
                label="Disable"
              />
              </RadioGroup>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              xs={12}
            >
              <Typography color="textPrimary" gutterBottom variant="h6">
                Lottery - Super distributer wise winning:
              </Typography>
              <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="no"
          name="radio-buttons-group"
      > 
              <FormControlLabel
              value='yes'
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value='no'
                control={<Radio color="primary" defaultChecked />}
                label="No"
              />
            </RadioGroup>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              xs={12}
            >
              <Typography color="textPrimary" gutterBottom variant="h6">
                Multi Attempt Allowed:
              </Typography>
              <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="enable"
          name="radio-buttons-group"
      > 
              <FormControlLabel
              value='enable'
                control={<Radio color="primary" defaultChecked  />}
                label="Enable"
              />
              <FormControlLabel
              value='disable'
                control={<Radio color="primary"/>}
                label="Disable"
              />
              </RadioGroup>
            </Grid>
          </Grid>
        </CardContent>
       
      </Card>
      </form>
      </center>
      <center>
      <form style={{width:'75%',marginTop:25,marginBottom:25}} {...props}>
      <Card>
        {/* <CardHeader
          subheader="Update password"
          title="Password"
        /> */}
        {/* <Divider /> */}
        <CardContent>
          <TextField
            fullWidth
            label="GSTIN"
            margin="normal"
            name="gstin"
            // onChange={handleChange}
            // value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Pan No"
            margin="normal"
            name="panno"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Game Name"
            margin="normal"
            name="gameName"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Game Slogan"
            margin="normal"
            name="gameSlogan"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Max Winning Limit"
            margin="normal"
            name="winningLimit"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Short Name"
            margin="normal"
            name="shortName"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Enter Code"
            margin="normal"
            name="enterCode"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Enter Desktop Version Number"
            margin="normal"
            name="desktopVersionNumber"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Enter Desktop Download Link"
            margin="normal"
            name="desktopDownloadLink"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Enter Desktop Download File Name"
            margin="normal"
            name="desktopDownloadFileName"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Lottery Pull Logic"
            margin="normal"
            name="lotteryPullLogic"
            // onChange={handleChange}
            // value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Card>
    </form>
    </center>
    </>
  );
};

export default Settings;
