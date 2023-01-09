import React from "react";
import { Navbar, Footer } from "../../Reusables/index";
import {
  Project_Body,
  Project_Header,
} from "../../Components/Project Components/index";
import { Grid, Stack } from "@mui/material";
const Morent = () => {
  const Content = {
    Project_Image_1: 'morent.png',
    Project_Image_2: 'Admin_Dashboard.png',
    Project_Image_3: 'Car_Details.png',
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
    paragraph3: "ReactJS, Material UI, GSAP,Firebase ,Vercel",
    paragraph4:
      " The Purpose of this Project was to build a functional and aesthetically <br /> pleasing frontend to help users manage their crypto assets",
    paragraph5:
      "I Developed an app that offers Urcrypto's core functionalities to it's users",
    paragraph6:
      "Based on my research, I knew the target groups I was catering to,and That lead me to keep the signup process simple and fast so that they can get started quickly.",
    nextPageLink: "Techfaze",
    to: "/Techfaze",
  };

  
  const header ={
    title:'Morent',
   subtitle:'A Car Rental Application',
   desc:'The concept of lalasia came from when i saw some beautiful pieces of furniture  on an app and decided to convert the concept into a digital product'
 
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
        <Project_Header   title={header.title} subtitle={header.subtitle} desc={header.desc} />
        <Project_Body
          Project_Image_1={Content.Project_Image_1}
          Project_Image_2={Content.Project_Image_2}
          Project_Image_3={Content.Project_Image_3}
          introHeading1={Content.introHeading1}
          introHeading2={Content.introSubheading}
          paragraph1={Content.paragraph1}
          paragraph2={Content.paragraph2}
          paragraph3={Content.paragraph3}
          paragraph4={Content.paragraph4}
          paragraph5={Content.paragraph5}
          paragraph6={Content.paragraph6}
          heading1={Content.heading1}
          heading2={Content.heading2}
          heading3={Content.heading3}
          heading4={Content.heading4}
          heading5={Content.heading5}
          heading6={Content.heading6}
          nextPageLink={Content.nextPageLink}
          to={Content.to}
        />
      </Grid>
      <Footer />
    </div>
  );
};

export default Morent;
