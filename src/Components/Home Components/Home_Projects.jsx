import React from "react";
import { Grid, Stack } from "@mui/material";
import "./Home_Projects.css";
import image from '../../assets/team-1.jpg'
import { Link } from "react-router-dom";
const Home_Projects = (props) => {
  return (
    <Grid xs={11} alignItems='center' justifyContent='center' container gap='3rem' className="portfolio_projects_container">

 <Grid container direction='row' alignItems='center' gap='3rem' justifyContent='center'   height='40rem' className="portfolio_projects_content">
 <Grid height='100%' container alignItems='center' justifyContent='center'  xs={12} md={6} className="portfolio_projects_content_image">
<img src={`../${props.img}`} alt={`${props.img}`}/>
 </Grid>
 <Grid height='100%' width='100%'  container alignItems='center' direction='column'  textAlign='start' justifyContent='flex-end' xs={12}  md={5} className="portfolio_projects_content_text">
<Stack alignSelf='flex-end'  height='100%' alignItems='flex-start' width='90%' direction='column'>
<Grid container alignItems='flex-start' gap='2rem' className='portfolio_projects_content_text_top'   direction='column' height='65%' width='85%'>
<p> {props.title}</p>
<h1>{props.desc}</h1>
</Grid>
<Grid container 
height='35%'
 className='portfolio_projects_content_text_bottom'
width='85%' direction='column' justifyContent='flex-start' gap='1.4rem'>
<p>{props.tags} </p>

<Stack width='8rem' height='2.5rem' borderRadius='30px' alignItems='center' textAlign='center' justifyContent='center' className='portfolio_projects_content_text_bottom_link' >
<Link to = {`${props.to}`}>
  View project
</Link>
</Stack>
</Grid>
</Stack>
</Grid>
 </Grid>
    </Grid>
  );
};

export default Home_Projects;
