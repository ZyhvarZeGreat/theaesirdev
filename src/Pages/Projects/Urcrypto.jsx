import React from "react";
import { Navbar, Footer } from "../../Reusables/index";
import { Grid, Stack } from "@mui/material";
const Urcrypto = () => {
  return (
    <Grid
      container
      xs={11.5}
      alignSelf="center"
      alignItems="center"
      justifyContent="center"
      className="portolio_projects"
    >
      <Navbar />
      <Footer />
    </Grid>
  );
};

export default Urcrypto;
