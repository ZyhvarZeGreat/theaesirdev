import React from "react";
import { Navbar, Footer } from "../../Reusables/index";
import { Grid, Stack } from "@mui/material";
import { Project_Header,Project_Body } from "../../Components/Project Components/index";
const Urcrypto = () => {
  return (
    <div>

<Grid
      container
      xs={12}
      alignItems="center"
      justifyContent="center"
      gap='5rem'
      direction='column'
      maxWidth='1440px'
      className="portolio_projects"
    >
<Stack width='90%' height='7rem' >
<Navbar />
</Stack>
      <Project_Header/>
      <Project_Body/>
      <Footer />
    </Grid>

    </div>
   
  );
};

export default Urcrypto;
