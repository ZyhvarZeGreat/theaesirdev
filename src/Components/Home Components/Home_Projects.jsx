import React ,{useEffect,useRef} from  "react";
import { Grid, Stack,useTheme,useMediaQuery } from "@mui/material";
import "./Home_Projects.css";
import {gsap} from 'gsap'
import {Power3,ScrollTrigger} from 'gsap/src/all'
import image from '../../assets/team-1.jpg'
import { Link } from "react-router-dom";
const Home_Projects = (props) => {
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up('md'));

gsap.registerPlugin(Power3)
 let tl = gsap.timeline()
let ref = useRef(null)
  useEffect(() => {
    console.log(ref)
    tl.from('.portfolio_projects_container', {
      y:200,
    })
  })
  

  return (
 <Grid xs={12} md={11} alignItems='center' justifyContent='center' container gap='3rem' className="portfolio_projects_container">
 
 <Grid xs={12} container direction='row' alignItems='center' gap={query ? '4rem':  '0rem'} justifyContent='center'   height={query ? '40rem' :'60rem'} className="portfolio_projects_content">


 <Grid   height={query ? '100%':'40%'}  container alignItems='center' justifyContent='center'  xs={12} md={6} className="portfolio_projects_content_image">
<img src={`../${props.img}`} alt={`${props.img}`}/>
  </Grid>



 <Grid    height={query ? '100%':'50%'}  width='100%'  container alignItems='center' direction='column'  textAlign='start' justifyContent={query ? 'flex-end':'flex-start'} xs={12}  md={5} className="portfolio_projects_content_text">
<Stack  alignSelf='flex-end'   height={query ? '100%':'70%'}  alignItems='flex-start' width={query ? '95%':'100%'} direction='column'>

<Grid container alignItems='flex-start' gap='2rem' className='portfolio_projects_content_text_top'   direction='column'height='65%' width='100%'>
<p> {props.title}</p>
<h1>{props.desc}</h1>
</Grid>

<Grid container 
height='35%'
 className='portfolio_projects_content_text_bottom'
width='100%' direction='column' justifyContent='flex-start' gap='1.4rem'>
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
