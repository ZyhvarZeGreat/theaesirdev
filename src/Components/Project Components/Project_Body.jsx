import React, { useRef, useEffect } from "react";
import "./Project_Body.css";
import { Grid, Stack, useTheme, useMediaQuery } from "@mui/material";

import { gsap, ScrollTrigger, Power2 } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Power2);

const Project_Body = () => {
  function textAnimate(el) {
    tl.fromTo(el, {
      y: 100,
      opacity: 0,
      duration: 2,
      skewY: -1,
      ease: Power2.easeInOut,
      delay: 0.3,
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
  useEffect(() => {
    tl.from(
      [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5],

      {
        y: 200,
        opacity: 0,
        duration: 2,
        skewY: -1,
        ease: Power2.easeInOut,
        delay: 0.3,
      },
      "+=1"
    );
    tl.from([header1, header2, header3], {
      x: -200,
      opacity: 0,
      duration: 1,
      skewX: -1,
      ease: Power2.easeInOut,
      delay: 0.3,
    });
  });
  return (
    <Grid
      container
      xs={11}
      alignItems="center"
      justifyContent="center"
      gap="5rem"
      height="30rem"
    >
      <Grid
        borderRadius="1rem"
        height="40rem"
        className="Projects_Image"
        container
        xs={11}
      ></Grid>

      <Grid
        className="Projects_Image_Text"
        height="40rem"
        gap="1rem"
        alignItems="center"
        justifyContent="center"
        container
        xs={12}
        md={11}
      >
        <Stack gap="1rem" width="70%">
          <p ref={(el) => (paragraph1 = el)}>
            beGalileo is a mathematical thinking program for children aged 3-14
            years.The program helps build confidence, improve problem-solving,
            enhances brain function, and boosts critical thinking.
          </p>

          <p ref={(el) => (paragraph2 = el)}>
            It also helps parents get a comprehensive insight into a child's
            learning journey through online and on-demand reports.
          </p>
        </Stack>

        <Stack width="70%" gap="1rem">
          <h2 ref={(el) => (header1 = el)}> Role </h2>
          <p ref={(el) => (paragraph3 = el)}>
            My responsibilities included defining scope, managing project, user
            research, ideating concepts, wireframing, iterating on feedback,
            designing system, creating prototypes, coordinating with developers
          </p>
        </Stack>

        <Stack width="70%" gap="1rem">
          <h2 ref={(el) => (header2 = el)}>Methods</h2>
          <p ref={(el) => (paragraph4 = el)}>
            Used Competitive & Comparative Analysis, Business Analysis, User
            Persona, User Flow, Site Map, System Design, Information
            Architecture, UI/UX Design, Prototyping, and Iterating, Usability
            Testing.
          </p>
        </Stack>

        <Stack width="70%" gap="1rem">
          <h2 ref={(el) => (header3 = el)}> Tools </h2>

          <p ref={(el) => (paragraph5 = el)}>
            {" "}
            ReactJS, Material UI, GSAP, Vercel
          </p>
        </Stack>
      </Grid>
      <Grid
        borderRadius="1rem"
        height="40rem"
        className="Projects_Image_2"
        container
        xs={11}
      ></Grid>
      <Grid
        xs={11}
        alignSelf="center"
        height="30rem"
        alignItems="center"
        justifyContent="center"
        container
        className="Projects_Image_Text_Challenge"
      >
        <Stack width="70%" gap="1rem">
          <h2> Challenge </h2>
          <p>
            My responsibilities included defining scope, managing project, user
            research, ideating concepts, wireframing, iterating on feedback,
            designing system, creating prototypes, coordinating with developers
          </p>
        </Stack>

        <Stack width="70%" gap="1rem">
          <h2> Solution</h2>
          <p>
            My responsibilities included defining scope, managing project, user
            research, ideating concepts, wireframing, iterating on feedback,
            designing system, creating prototypes, coordinating with developers
          </p>
        </Stack>
      </Grid>

      <Grid
        borderRadius="1rem"
        height="40rem"
        className="Projects_Image_3"
        container
        xs={11}
      ></Grid>

      <Grid
        xs={11}
        alignSelf="center"
        height="30rem"
        alignItems="center"
        justifyContent="center"
        container
        className="Projects_Image_Text_Challenge"
      >
        <Stack width="70%" gap="1rem">
          <h2> Easy Onboarding Process</h2>
          <p>
            Based on our research on persona and discussion with the client, we
            knew the target groups we are catering to are young parents who are
            working professionals and want their children to get the best
            education. That leads us to keep the signup and adding a child
            process simple and fast so that they can get started quickly.
          </p>
        </Stack>


      </Grid>
    </Grid>
  );
};

export default Project_Body;
