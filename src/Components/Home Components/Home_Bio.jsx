import React, { useRef, useEffect } from "react";
import "./Home_Bio.css";
import bio_image from "../../assets/main_bio.jpg";
import { ScrollTrigger } from "gsap/src/all";
import scrollElement from "../../Animations/scrollElement";
import { gsap, TweenMax, TimelineLite, Power2 } from "gsap/gsap-core";
import CssRulePlugin from "gsap/CSSRulePlugin";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

const Home_Bio = () => {
  let container = useRef(null);
  let image = useRef(null);
  let tl = new TimelineLite();
  gsap.registerPlugin(CssRulePlugin, ScrollTrigger);

  let imageReveal = CssRulePlugin.getRule(
    ".portfolio_bio_image_container::after"
  );

  useEffect(() => {
    tl.to(container, 2.5, { css: { visibility: "visible" } }).to(
      imageReveal,
      1.3,
      { width: "0%", ease: Power2.easeOut }
    );
    tl.from(".portfolio_bio h1", {
      scrollTrigger: {
        trigger: "portfolio_bio",
        start: "top center",
        end: "+=300",
      },
      y: -300,
      skewY: -2,
      ease: Power2.easeOut,
      opacity: 0,
      duration: 0.9,
    }).from(".portfolio_bio_writeup p", {
      y: 300,
      skewY: 2,
      opacity: 0,
      ease: "Power1.easeOut",
      duration: 1,
      stagger: {
        amount: 0.7,
      },
    });

    // scrollElement('.portfolio_bio_writeup_container','.portfolio_bio_writeup p')
    console.log(imageReveal);
  });

  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up("md"));
  function mobileQuery(param1, param2) {
    query ? param1 : param2;
  }
  return (
    <Grid container xs={11.5} className="portfolio_bio">
      <Grid
        item
        className="portfolio_bio_writeup"
        xs={12}
        md={6}
        marginBottom={query ? "0rem" : "4rem"}
      >
        <div className="portfolio_bio_writeup_container">
          <h1>
            <span>Bolude</span> Daniel
          </h1>
          <p>
            I develop products that are responsive and user-friendly. This means
            ensuring that the product's layout is intuitive and that the UI
            responds the way a user expects them to.
          </p>

          <p>
            {" "}
            I also ensure that the product is easy to use and understand. I
            communicate effectively with designers and developers so that we are
            all well-aligned in our goals and that each of us has an
            understanding of how the other works.
          </p>

          <p>
            {" "}
            When creating products, I make it a priority to focus on the
            consumers, not just the product itself. a more useful, interesting
            product will attract more users. An effective way to discover how to
            make a more useful product, is by talking to the users and
            stakeholders and understanding their needs.{" "}
          </p>
          <p>
            <br />
            A balance between what users will enjoy, and what an organization
            needs has to be found. When developing, it's important to always
            plan for future changes. We never know when a product will need a
            new feature or have to adjust to a business
            <br />
            change. By planning ahead, I can make sure whatever change happens
            in the future, my code will be flexible enough to handle it.
          </p>
        </div>
      </Grid>
      <Grid
        container
        className="portfolio_bio_image_container"
        xs={12}
        md={6}
        ref={(el) => (container = el)}
      >
        <img ref={(el) => (image = el)} src={bio_image} alt="bio image" />
      </Grid>
    </Grid>
  );
};

export default Home_Bio;
