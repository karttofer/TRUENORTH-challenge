// Dependencies
import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Paper, Grid, Typography } from "@mui/material";

// Style
import "./style.css";

const Container = ({ selectValueProp, handleChange }) => {
  return (
    <Paper className="containers-style">
      <Grid container alignItems="center" justifyContent="center">
        <Typography variant="body2" color="text.secondary">
          How many task do you wanna generate?
        </Typography>
        <Select
          sx={{ m: 2 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValueProp}
          onChange={handleChange}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="20">20</MenuItem>
        </Select>
      </Grid>
    </Paper>
  );
};

export default Container;
