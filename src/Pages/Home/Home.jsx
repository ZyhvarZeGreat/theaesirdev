import React from "react";
import { Grid } from "@mui/material";
import {Home_Hero,Home_Bio} from '../../Components/index'
import { Navbar, Footer } from "../../Reusables/index";
const Home = () => {
  return (
    <Grid alignItems='center' justifyContent='center' maxWidth='1440px'  container xs={12}>
      <Navbar />
      <Home_Hero/>
      <Home_Bio/>
      <Footer />
    </Grid>
  );
};

export default Home;
