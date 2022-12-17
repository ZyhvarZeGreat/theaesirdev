import React, { useRef, useEffect } from "react";
import "./Home_Hero.css";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/src/all";
import { Power3, Timeline } from "gsap/gsap-core";
import { gsap } from "gsap";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

const Home_Hero = (props) => {
  let elementRef = useRef(null);
  let tl = gsap.timeline();

  gsap.registerPlugin(Timeline, Power3,ScrollTrigger);
  useEffect(() => {
   
    tl.from('.portfolio_header_items div', {
      y:200,
      ease:Power3.easeOut,
      delay:.3,
      opacity:0,
      duration: 1.9,
      stagger:{
        amount:0.5
      }
    });

    // tl.from( '.portfolio_header_item div ' ,{
    //   scrollTrigger:{
    //     trigger: '.portfolio_header_item ',
    //     start:'top top',
    //     end:"+=100",
    //     markers:{startColor:'red',endColor:'blue',fontSize:'20px',fontWeight:'22px',indent:20}
    //     },
    //    y:200,
    //     ease: Power3.easeInOut,
    //     delay:.3,
    //     duration: 1.9,
    //     stagger:{
    //       amount:0.5
    //     }
    // })
    console.log(elementRef);
  });

  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up("md"));
  function mobileQuery(param1, param2) {
    query ? param1 : param2;
  }
  return (
    <Grid
      direction="row"
      height={query ? "50rem" : "60rem"}
      alignItems="center"
      justifyContent="center"
      xs={11.5}
      className="portfolio_hero"
    >
      <Grid xs={12} className="spiral"></Grid>
      <Grid
        container
        xs={11.5}
        alignItems="center"
        className="portfolio_hero_container"
      >
        <Grid xs={12} container className="portfolio_hero_header">
          <Grid
            className="portfolio_hero_header_container"
            alignItems={query ? "center" : "flex-start"}
            justifyContent={query ? "center" : "flex-start"}
            gap="4rem"
            container
            md={9}
            xs={12}
          >
            <Grid container  gap="1rem"   className="portfolio_header_items_container">
              <div  className= 'portfolio_header_items' >
               <div>
               <span className="portfolio_hero_header_cta">
                  High-class software development
                </span>
               </div>
              </div>

              <div  className= 'portfolio_header_items' >
            <div>
            <span> for innovative startups and medium-size </span>
            </div>
              </div>

              <div className= 'portfolio_header_items'>
            <div>
            <span>
                  companies that understand
                  <br /> the value of quality developers. <br />
                </span>
            </div>
              </div>

              <div className= 'portfolio_header_items' >
              <div>
              <span>Let's turn your idea into a business together.</span>
              </div>
              </div>
            </Grid>
          </Grid>

          <Grid
            item
            className="portfolio_hero_header_notification"
            xs={11}
            md={3}
          >
            
            <div className= 'portfolio_header_items' >
            <div className = 'portfolio_header_item_container'> 
              <h3>
              Available for work
              <br /> from May 1st 2022
            </h3>
            </div>
              </div>
           
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home_Hero;
