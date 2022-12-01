import React from "react";
import "./Home_Bio.css";
import bio_image from "../../assets/main_bio.jpg";
import { Grid,useTheme,useMediaQuery } from "@mui/material";

const Home_Bio = () => {
  
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))
  function mobileQuery(param1,param2){
    query ? param1:param2
  }
  return (
    <Grid marginTop={query ? '5rem':'1rem'} container xs={11}  className="portfolio_bio">
      <Grid
        item
        className="portfolio_bio_writeup"
        xs={12}
        md={6}
        marginBottom={query ? '0rem': '4rem'}
      >
        <h1><span>Bolude</span> Daniel</h1>
        <p>
          I develop products that are responsive and user-friendly. This means
          ensuring that the product's layout is intuitive and that the UI responds the way a user expects them to.</p>

          <p> I also ensure that
          the product is easy to use and understand. I communicate effectively
          with designers and developers so that we are all well-aligned in our
          goals and that each of us has an understanding of how the other works.</p>
       
       <p>   When creating products, I make it a priority to focus on the
          consumers, not just the product itself. a more useful, interesting
          product will attract more users. An effective way to discover how to
          make a more useful product, is by talking to the users and stakeholders and
          understanding their needs. </p>
        <p>
        
          <br/>
          A balance between what users will enjoy,
          and what an organization needs has to be found. When developing, it's
          important to always plan for future changes. We never know when a
          product will need a new feature or have to adjust to a business
          <br/>
          change. By planning ahead, I can make sure whatever change happens in
          the future, my code will be flexible enough to handle it.
        </p>
      </Grid>
      <Grid
        item
        className="portfolio_bio_image_container"
        xs={12}
        md={6}
  
      >
        <img src={bio_image} alt="bio image" />
      </Grid>
    </Grid>
  );
};

export default Home_Bio;
