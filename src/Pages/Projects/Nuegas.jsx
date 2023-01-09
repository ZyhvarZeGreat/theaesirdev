import React from "react";
import { Navbar, Footer } from "../../Reusables/index";
import {
  Project_Body,
  Project_Header,
} from "../../Components/Project Components/index";
import { Grid, Stack } from "@mui/material";
const Nuegas = () => {
  const Content = {
    Project_Image_1: "NuegasCover.png",
    Project_Image_2: "NuegasDashboard.png",
    Project_Image_3: "NuegasDetails.png",
    introHeading1:
      "With Task Hub, users can create tasks, assign them to team members, and set deadlines. The app also includes features such as categorization, prioritization, and task dependencies to help users stay focused and manage their workload effectively.",
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
      "I implemented a clean and intuitive interface, making it easy for users to add and manage their tasks. The app also includes integrations with popular productivity tools, such as Trello and Google Calendar, allowing users to seamlessly sync their tasks and stay on track.",
    paragraph6:
      "In addition to individual task management, Task Hub includes collaboration features that allow teams to work together on projects and assignments. Users can create shared task lists and assign tasks to team members, as well as communicate with one another through the app's built-in messaging system.  Overall, Task Hub is a powerful and flexible task management solution that helps users stay organized, prioritize their work, and collaborate with their team.",
    nextPageLink: "Urcrypto",
    to: "/urcrypto",
  };

  const header = {
    weird:
      "Planning and gathering requirements: The first step in building Morent would be to plan out the features and functionalities of the application. This would involve gathering requirements from stakeholders, such as the business owner and potential users, and determining the overall goal of the application.  Setting up the development environment: Next, the development team would set up their local development environments with all the necessary tools and frameworks, such as Node.js, React, and Firebase.    Designing the user interface: Once the development environment is set up, the team would begin designing the user interface for Morent using React. This would involve creating components for the different pages and screens of the application, as well as styling and layout.   Deployment: Finally, once the application has been tested and debugged, it can be deployed to a hosting platform, such as Heroku or AWS, and made available to users.",
    title: "Nuegas",
    subtitle: " A Task Management Application",
    desc: "Task Hub is a task management application designed to help individuals and teams stay organized and on top of their tasks.",
  };
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
        <Project_Header
          title={header.title}
          subtitle={header.subtitle}
          desc={header.desc}
        />
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

export default Nuegas;
