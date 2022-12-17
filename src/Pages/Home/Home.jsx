import React from "react";
import { Grid, Stack,useTheme,useMediaQuery } from "@mui/material";
import {Home_Hero,Home_Bio,Home_Offers,Home_Projects,Home_Work_Experience,Home_Articles,Call_to_action} from '../../Components/index'
import { Navbar, Footer } from "../../Reusables/index";



const projectsData = [
  {
    img:'urcrypto.jpg',
    title: 'Urcrypto',
    desc:' A Landing page and dashboard geared towards crypto transactions',
    tags:'Web App,Finance',
    to:'urcrypto'
  },
  {
    img:'lalasia.png',
    title: 'Lalasia',
    desc:' An e-commerce/landing page for high end furniture purchase',
    tags:'Web App,E-commerce',
    to:'lalasia'
  },
  {
    img:'Appointfly.png',
    title: 'Appointfly',
    desc:' A Task Management App',
    tags:'Web App,Task Management',
    to:'appointly'
  },
  {
    img:'techfaze.png',
    title: 'Techfaze',
    desc:'E-commerce Platform for high grade electronics and gadgets',
    tags:'Web App,E-commerce',
    to:'techfaze'
  },

  {
    img:'estatery.png',
    title: 'Estatery',
    desc:'A Realtor Platform to buy ,sell and rent real estate',
    tags:'Web App,E-commerce',
    to:'estatery',
  },
  
]

const projects = projectsData.map(({img,title,desc,tags,to})=> {
  return (
    <Home_Projects img={img} title={title} desc={desc} to={to} tags={tags} />
  )
})
const Home = () => {
  

 const theme = useTheme();
 const query = useMediaQuery(theme.breakpoints.up('md'));
  return (
 <div>
     <Grid  alignItems='center' justifyContent='center' maxWidth='1440px' gap='5rem'  container xs={11.5}>
      <Navbar to={`/`}  />
      <Home_Hero/>
      <Home_Bio/>
      

        <Grid gap='5rem'  xs={11}  container alignItems='center' justifyContent='center' className='portfolio_projects' >
        <Grid container xs={11}  height='6rem' alignItems='center' justifyContent='flex-start' className = "portfolio_projects_header">
        <h1 className="portfolio_projects_header"> Selected <span> Projects</span></h1>

        </Grid>
  <Grid container alignItems='center' gap={query ? '7rem':'3rem'} className="portfolio_projects_contents">
  {projects}
  </Grid>
        </Grid>
 

    
 
      <Home_Offers/>
      <Home_Work_Experience/>
      <Home_Articles/>
      <Call_to_action/>
     
    </Grid>
    <Footer />
 </div>
  );
};

export default Home;
