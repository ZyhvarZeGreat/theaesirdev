import React from "react";
import './Home_Hero.css'
import { Grid } from "@mui/material";
const Home_Hero = () => {
  return (
    <Grid backgroundColor='azure' container direction='row' height='120vh' alignItems='flex-end' justifyContent='center'  xs={11.5} className="portfolio_hero">
      <Grid  xs={11.5}  className="portfolio_hero_container">
     <Grid xs={12} item   className='portfolio_hero_header'>
  <Grid xs={9}>
  <h1>
          <span className="portfolio_hero_header_cta">High-class digital product design  </span>
          for innovative startups and medium-size companies that understand<br/>  the
          value of design. <br/> Let's turn your idea into a business together.
        </h1>
  </Grid>

      <Grid className='portfolio_hero_header_notification' xs={3}>
      <h3> Available for work<br/> from  May 1st 2022</h3>
      </Grid>
     </Grid>
 
      </Grid>
    </Grid>
  );
};

export default Home_Hero;
