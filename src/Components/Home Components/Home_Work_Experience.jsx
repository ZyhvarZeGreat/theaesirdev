import React from "react";
import "./Home_Work_Experience.css";
import { Grid } from "@mui/material";
const Home_Work_Experience = () => {
  return (
    <Grid
      alignSelf="flex-start"
      className="Home_Work_Experience"
      xs={11}
      container
      alignItems="flex-start"
    >
      <Grid xs={12} md={6} container>

        <h1 className="Home_Work_Experience_header">
        <span>
            After taking my first crucial steps to
            <br /> the path of becoming a software developer
          </span>
        </h1>
        <h1 className="Home_Work_Experience_header">
          I've had time to learn and develop myself,
          <br /> and i believe the projects i completed speak volumes for
          themselves
        </h1>
      </Grid>
    </Grid>
  );
};

export default Home_Work_Experience;
