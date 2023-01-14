import React, { useRef, useEffect, useState } from "react";
import "./Project_Body.css";
import { Link, useNavigate, redirect, useParams } from "react-router-dom";
import { Grid, Stack, useTheme, useMediaQuery } from "@mui/material";
import { Projects_Data } from "./Projects_Data";
import { gsap, ScrollTrigger, Power2 } from "gsap/all";
import img from "../../assets/3dpattern.jpg";
gsap.registerPlugin(ScrollTrigger, Power2);

const Project_Body = (props) => {
  const { projectdetails } = useParams();

  const projects = Projects_Data.find(
    (product) => product.id === projectdetails
  );

  console.log(projects);

  const {
    Project_Image_1,
    Project_Image_2,
    Project_Image_3,
    introHeading1,
    id,
    introsubHeading,
    paragraph1text,
    paragraph2text,
    paragraph3text,
    paragraph4text,
    paragraph5text,
    paragraph6text,
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    to,
    nextPageLink,
  } = projects;

  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up("md"));

  function textAnimate([el]) {
    tl.fromTo(el, {
      y: 100,
      opacity: 0,
      duration: 2,
      skewY: -1,
      ease: Power2.easeInOut,
      delay: 0.3,
      scrollTrigger: {
        trigger: el,
      },
    });
  }
  const tl = gsap.timeline();
  let paragraph1 = useRef(null);
  let paragraph2 = useRef(null);
  let paragraph3 = useRef(null);
  let paragraph4 = useRef(null);
  let paragraph5 = useRef(null);
  let header1 = useRef(null);
  let header2 = useRef(null);
  let header3 = useRef(null);

  const navigate = useNavigate();

  const navigateFunction = () => {
    const isHigher = id > 4;
    // // navigate(`/${(Number(id) + 1).toString()}`);
    // setProjectId((Number(id) + 1).toString())

    isHigher ? navigate(`/1`) : navigate(`/${(Number(id) + 1).toString()}`);

    // console.log(projectId)
    // console.log(isHigher)
  };

  //   useEffect(()=>{

  //  },[projectId])
  // useEffect(() => {
  //   console.log(navigateFunction);
  //   tl.from(
  //     [header1, header2, header3],
  //     {
  //       x: -200,
  //       opacity: 0,
  //       duration: 1,
  //       skewX: -1,
  //       ease: Power2.
  //     },
  //     0.45
  //   ).from(
  //     [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5],

  //     {
  //       y: 200,
  //       opacity: 0,
  //       duration: 2,
  //       skewY: -1,
  //       ease: Power2.easeInOut,
  //       delay: 0.3,
  //       scrollTrigger: {
  //         trigger: ".Projects_Image_Text",
  //       },
  //     },
  //     "+=1"
  //   );
  // });
  return (
    <Grid
      container
      xs={11}
      alignItems="center"
      justifyContent="center"
      gap="3rem"
      height="30rem"
    >
      <Grid
        borderRadius={query ? "1rem" : ""}
        className="Projects_Image"
        style={{ backgroundImage: `url('../${Project_Image_1}')` }}
        container
        md={11}
        xs={11.8}
      ></Grid>

      <Grid
        className="Projects_Image_Text"
        height={query ? "40rem" : ""}
        gap={"2rem"}
        justifyContent="center"
        container
        xs={12}
        md={11}
        alignItems={query ? "flex-start" : "center"}
        textAlign={query ? "start" : "center"}
      >
        <Stack
          className="portfolio_projects_header"
          gap={"2rem"}
          width={query ? "70%" : "100%"}
        >
          <p ref={(el) => (paragraph1 = el)}>{introHeading1}</p>
          <p ref={(el) => (paragraph2 = el)}>{introsubHeading}</p>
        </Stack>

        <Stack width={query ? "70%" : "100%"} gap={"1rem"}>
          <h2 ref={(el) => (header1 = el)}> {heading1} </h2>
          <p ref={(el) => (paragraph3 = el)}>{paragraph1text}</p>
        </Stack>

        <Stack width={query ? "70%" : "100%"} gap={"1rem"}>
          <h2 ref={(el) => (header2 = el)}>{heading2} </h2>
          <p ref={(el) => (paragraph4 = el)}>{paragraph2text}</p>
        </Stack>

        <Stack width={query ? "70%" : "100%"} gap={"1rem"}>
          <h2 ref={(el) => (header3 = el)}> {heading3}</h2>

          <p ref={(el) => (paragraph5 = el)}>{paragraph3text}</p>
        </Stack>
      </Grid>
      <Grid
        borderRadius={query ? "1rem" : ""}
        className="Projects_Image_2"
        style={{ backgroundImage: `url('../${Project_Image_2}')` }}
        container
        md={11}
        xs={11.8}
      ></Grid>
      <Grid
        xs={11.5}
        alignSelf="center"
        height={query ? "25rem" : ""}
        alignItems="center"
        gap={"2rem"}
        justifyContent="center"
        container
        className="Projects_Image_Text_Challenge"
      >
        <Stack
          alignItems={query ? "flex-start" : "center"}
          textAlign={query ? "start" : "center"}
          width={query ? "70%" : "100%"}
          gap={"2rem"}
        >
          <h2> {heading4} </h2>
          <p>{paragraph4text}</p>
        </Stack>

        <Stack
          alignItems={query ? "flex-start" : "center"}
          textAlign={query ? "start" : "center"}
          width={query ? "70%" : "100%"}
          gap={"2rem"}
        >
          <h2> {heading5} </h2>
          <p>{paragraph5text}</p>
        </Stack>
      </Grid>

      <Grid
        borderRadius={query ? "1rem" : ""}
        className="Projects_Image_3"
        container
        md={11}
        xs={11.8}
        style={{ backgroundImage: `url('../${Project_Image_3}')` }}
      ></Grid>

      <Grid
        xs={11.5}
        alignSelf="center"
        height={query ? "20rem" : ""}
        alignItems="center"
        justifyContent="center"
        container
        className="Projects_Image_Text_Challenge"
      >
        <Stack
          alignItems={query ? "flex-start" : "center"}
          textAlign={query ? "start" : "center"}
          width={query ? "70%" : "100%"}
          gap={"1rem"}
        >
          <h2>{heading6} </h2>
          <p>{paragraph6text}</p>
        </Stack>
      </Grid>

      <Stack
        direction="column"
        className="portfolio_project_link"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width={query ? "70rem" : "100%"}
        gap="1.7rem"
        marginTop="2rem"
      >
        <h1 className="portfolio_project_link_h1">Check Out My Work</h1>

        <Link className="portfolio_project_link_link" to={to}>
          <p>Go to Project</p>
        </Link>

        <Stack className="portfolio_project_link_overlay"></Stack>
      </Stack>

      <Stack
        height={query ? "10rem" : "15rem"}
        className="Project_Body_Navigation"
        width={query ? "70%" : "100%"}
        alignItems="center"
        justifyContent="center"
      >
        <p>Next</p>

        <button
          className="portfolio_project_navigate_btn"
          onClick={() => {
            navigateFunction();
          }}
        >
          <h1>{nextPageLink}</h1>
        </button>
      </Stack>
    </Grid>
  );
};

export default Project_Body;
