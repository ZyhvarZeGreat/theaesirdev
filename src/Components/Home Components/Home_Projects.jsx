import React, { useEffect, useRef } from "react";
import { Grid, Stack, useTheme, useMediaQuery } from "@mui/material";
import "./Home_Projects.css";
import { gsap } from "gsap";
import { Power3, ScrollTrigger } from "gsap/src/all";
import image from "../../assets/team-1.jpg";
import { Link, useParams } from "react-router-dom";
const Home_Projects = (props) => {
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up("md"));

  

  return (
    <Grid
      xs={11}
      md={12}
      alignItems="center"
      justifyContent="center"
      container
      gap="2rem"
      className="portfolio_projects_container"
      id='Work'
    >
      <Grid
        xs={12}
        container
        direction="row"
        alignItems="center"
        gap={query ? "3rem" : "1rem"}
        justifyContent="center"
        height={query ? "35rem" : ""}
        className="portfolio_projects_content"
      >
        <Grid
          height={query ? "87%" : "18rem"}
          container
          alignItems="center"
          justifyContent="center"
          xs={12}
          md={6}
          className="portfolio_projects_content_image"
        >
          <img src={`../${props.img}`} alt={`${props.img}`} />
        </Grid>

        <Grid
          height={query ? "80%" : "22rem"}
          width="100%"
          container
          alignItems="flex-end"
          direction="column"
          textAlign="start"
          justifyContent={query ? "flex-end" : "center"}
          xs={12}
          md={5}
          className="portfolio_projects_content_text"
        >
          <Stack
            alignSelf="flex-end"
            height={query ? "100%" : "70%"}
            alignItems="flex-end"
            width={query ? "95%" : "100%"}
            justifyContent='flex-end'
            direction="column"
            className='portfolio_projects_content_text_container'
            gap='1rem'
          >
            <Grid
              container
              alignItems="flex-start"
              gap="2rem"
              justifyContent='flex-end'
              className="portfolio_projects_content_text_top"
              direction="column"
              width="100%"
              height='80%'
            >
              <p> {props.title}</p>
              <h1>{props.desc}</h1>
            </Grid>

            <Grid
              container
              height={query ? "20%":'10rem'}
              className="portfolio_projects_content_text_bottom"
              width="100%"
              direction="column"
              justifyContent={query ? "flex-end":'flex-start'}
              gap="1.4rem"
            
            >
              <p>{props.tags} </p>

              <Stack
                width="8rem"
                height="2.5rem"
                borderRadius="30px"
                alignItems="center"
                textAlign="center"
                justifyContent="center"
                className="portfolio_projects_content_text_bottom_link"
              >
                <Link to={`/${props.id}`}>View project</Link>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home_Projects;
