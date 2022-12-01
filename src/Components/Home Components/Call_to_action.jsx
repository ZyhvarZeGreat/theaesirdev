import React from "react";
import './call_to_action.css'
import { Grid,useTheme,useMediaQuery } from "@mui/material";
const Call_to_action = () => {
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))
  function mobileQuery(param1,param2){
    query ? param1:param2
  }
  return (
    <Grid height='25rem' container xs={10.5} md={11} alignItems="center" justifyContent="flex-start" className="call_to_action">
      <h1>
        Based in Lagos,Nigeria. <br />
        <span className="call_to_action_span"> Working with clients from all over the world</span>
      </h1>
    </Grid>
  );
};

export default Call_to_action;
