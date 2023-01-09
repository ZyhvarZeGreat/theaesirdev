import React, { useRef, useEffect } from "react";
import "./Project_Body.css";
import { Link,useNavigate,redirect } from "react-router-dom";
import { Grid, Stack, useTheme, useMediaQuery } from "@mui/material";

import { gsap, ScrollTrigger, Power2 } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Power2);



const Project_Body = (props) => {
  
  function textAnimate([el]) {
    tl.fromTo(el, {
      y: 100,
      opacity: 0,
      duration: 2,
      skewY: -1,
      ease: Power2.easeInOut,
      delay: 0.3,
      scrollTrigger:{
        trigger: el
      }
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

  const navigate = useNavigate()

  const navigateFunction =() => {
redirect(`/${props.to}`)
console.log(props.to)
  }
  useEffect(() => {
    
  console.log(navigateFunction)
  tl.from([header1, header2, header3], {
    x: -200,
    opacity: 0,
    duration: 1,
    skewX: -1,
    ease: Power2.easeInOut,
    delay: 0.3,
  },0.45).from(
      [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5],

      {
        y: 200,
        opacity: 0,
        duration: 2,
        skewY: -1,
        ease: Power2.easeInOut,
        delay: 0.3,
        scrollTrigger:{
          trigger:'.Projects_Image_Text'
        }
      },
      "+=1"
    );
   
  });
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
        borderRadius="1rem"
        height="40rem"
        className="Projects_Image"
        style={{backgroundImage: `url('../${props.Project_Image_1}')`}}
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
        <Stack  gap="1rem" width="70%">
          <p ref={(el) => (paragraph1 = el)}>
      {props.introHeading1}
          </p>
          <p ref={(el) => (paragraph2 = el)}>
          {props.introHeading2}
          </p>
        </Stack>

        <Stack  width="70%" gap="1rem">
          <h2 ref={(el) => (header1 = el)}> {props.heading1} </h2>
          <p ref={(el) => (paragraph3 = el)}>
          {props.paragraph1}
          </p>
        </Stack>

        <Stack  width="70%" gap="1rem">
          <h2 ref={(el) => (header2 = el)}>{props.heading2} </h2>
          <p ref={(el) => (paragraph4 = el)}>
          {props.paragraph2}
          </p>
        </Stack>

        <Stack   width="70%" gap="1rem">
          <h2 ref={(el) => (header3 = el)}> {props.heading3}</h2>

          <p ref={(el) => (paragraph5 = el)}>
            {props.paragraph3}
          </p>
        </Stack>
      </Grid>
      <Grid
        borderRadius="1rem"
        height="50rem"
        className="Projects_Image_2"
        style={{backgroundImage: `url('../${props.Project_Image_2}')`}}
        container
        xs={11}
      ></Grid>
      <Grid
        xs={11}
        alignSelf="center"
        height="25rem"
        alignItems="center"
        justifyContent="center"
        container
        
        className="Projects_Image_Text_Challenge"
      >
        <Stack width="70%" gap=".8rem">
          <h2>   {props.heading4} </h2>
          <p>
          {props.paragraph4}
          </p>
        </Stack>

        <Stack width="70%" gap=".8rem">
        <h2>   {props.heading5} </h2>
          <p>
          {props.paragraph5}
          </p>
        </Stack>
      </Grid>

      <Grid
        borderRadius="1rem"
        height="50rem"
        className="Projects_Image_3"
        container
        xs={11}
        style={{backgroundImage: `url('../${props.Project_Image_3}')`}}
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
        <h2>{props.heading6} </h2>
          <p>
          {props.paragraph6}
          </p>
        </Stack>

        <Stack height='10rem'  gap='2rem' className="Project_Body_Navigation" width="70%" alignItems="center" justifyContent="center">
          <p>Next</p>
       <button onClick={()=> navigateFunction()} >
       <h1>{props.nextPageLink}</h1>
       </button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Project_Body;
