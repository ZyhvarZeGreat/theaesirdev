import React, { useEffect } from "react";
import { Navbar, Footer } from "../../Reusables/index";
import { Grid, Stack } from "@mui/material";

import {
  Project_Header,
  Project_Body,
} from "../../Components/Project Components/index";
const Urcrypto = () => {
  const Content = {

    Project_Image_1: 'urcrypto.jpg' ,
    Project_Image_2: 'Dashboard.jpg' ,
    Project_Image_3: 'SignIn.png' ,
    introHeading1:
      "Urcrypto was one of the first projects i built using react.js and was an exploration towards the crypto and web3 aspect of web development.",
    introSubheading:
      " It acted as a guide to my learning path and altered my views of design and development",

    heading1: "Role",
    heading2: "Methods",
    heading3: "Tools",
    heading4: "Challenge",
    heading5: "Solution",
    heading6: "Easy Onboarding Process",

    paragraph1:
      "My responsibilities included defining the scope, managing the project,Introducing the animations, and Integrating the firebase backend",
    paragraph2:
      "Functional Programming, System Design, Information Architecture,Testing",
    paragraph3: "ReactJS, Material UI, GSAP,Firebase Vercel",
    paragraph4:
      " The Purpose of this Project was to build a functional and aesthetically <br /> pleasing frontend to help users manage their crypto assets",
    paragraph5:
      "I Developed an app that offers Urcrypto's core functionalities to it's users",
    paragraph6:
      "Based on my research, I knew the target groups I was catering to,and That lead me to keep the signup process simple and fast so that they can get started quickly.",
    nextPageLink: " Lalasia",
    to: '/Lalasia'
  };

  
 const header ={
  
  title:'Urcrypto',
  subtitle:'A Landing page and dashboard geared towards crypto transactions',
  desc:'Urcrypto was my first project , and i intended it to be  an exploration of a centralized exchange <br/>  the end goal of the project was to enable users to make transactions seamlessly hitch and hassle free'

 }



  return (
    <div className="portfolio_projects">
      <Grid
        container
        xs={12}
        alignItems="center"
        justifyContent="center"
        gap="5rem"
        direction="column"
        maxWidth="1440px"
        className="portolio_projects_container"
      >
        <Stack width="90%" height="7rem">
          <Navbar />
        </Stack>
        <Project_Header title={header.title} subtitle={header.subtitle} desc={header.desc} />
        <Project_Body
       {...Content}
        />
      </Grid>
      <Footer />
    </div>
  );
};

export default Urcrypto;
