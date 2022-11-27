import React from "react";
import "./Home_Bio.css";
import bio_image from "../../assets/bio.jpg";
import { Grid } from "@mui/material";

const Home_Bio = () => {
  return (
    <Grid container xs={11} backgroundColor="#e5e5e5" className="portfolio_bio">
      <Grid
        item
        className="portfolio_bio_writeup"
        backgroundColor="azure"
        xs={6}
      >
        <h1>Bolude Daniel</h1>
        <p>
          I develop products that are responsive and user-friendly. This means
          ensuring that the product's layout is intuitive and that buttons and
          controls respond the way a user expects them to. I also ensure that
          the product is easy to use and understand. I communicate effectively
          with designers and developers so that we are all well-aligned in our
          goals and that each of us has an understanding of how the other works.
        </p>
        <p>
          When creating products, I make it a priority to focus on the
          consumers, not just the product itself. a more useful, interesting
          product will attract more users. An effective way to discover how to
          make a more useful product, is by talking to your users and
          understanding their needs. A balance between what users will enjoy,
          and what an organization needs has to be found. When developing, it's
          important to always plan for future changes. We never know when a
          product will need a new feature or have to adjust to a business
          change. By planning ahead, I can make sure whatever change happens in
          the future, my code will be flexible enough to handle it.
        </p>
      </Grid>
      <Grid
        item
        className="portfolio_bio_image_container"
        backgroundColor="beige"
        xs={6}
      >
        <img src={bio_image} alt="bio image" />
      </Grid>
    </Grid>
  );
};

export default Home_Bio;
