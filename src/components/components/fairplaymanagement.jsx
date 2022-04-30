import React, {useState} from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Fairplaymanagement = () => {

    const [lottery, setLottery] = useState('');
    const handleChange = (event) => {
        setLottery(event.target.value);
      };

  return (
    <div>
      <center>
        <div
          style={{
            width: "50%",
            backgroundColor: "#e8e8e8",
            padding: 20,
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 25,
            borderRadius: 7,
          }}
        >
          Fairplay Management
        </div>
        <Box sx={{ minWidth: 120 }}>
                <div style={{fontSize:20}}>Select Lottery:</div>   
                <Select
                style={{ width: "50%", height: "100%", backgroundColor:'#3b76db', color:'#fff', fontWeight: "bold" }}
                value={lottery}
                label="Select Lottery"
                onChange={handleChange}
                >
                <MenuItem value={"Lottery1"}>Lottery1</MenuItem>
                <MenuItem value={"Lottery2"}>Lottery2</MenuItem>
                <MenuItem value={"Lottery3"}>Lottery3</MenuItem>
                </Select>
            </Box>
      </center>
    </div>
  );
};

export default Fairplaymanagement;
