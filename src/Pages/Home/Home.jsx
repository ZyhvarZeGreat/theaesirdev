import React,{useEffect,useRef} from "react";
import { Grid, Stack,useTheme,useMediaQuery, getBottomNavigationActionUtilityClass } from "@mui/material";
import {Home_Hero,Home_Bio,Home_Offers,Home_Projects,Home_Work_Experience,Home_Articles,Call_to_action} from '../../Components/index'
import { Navbar, Footer } from "../../Reusables/index";
import {gsap} from 'gsap'
import {Power3,ScrollTrigger} from 'gsap/src/all'
import {projectsData }from './Projects_Data'



const projects = projectsData.map((project)=> {
  return (
    <Home_Projects {...project}/>
  )
})
const Home = () => {

const theme = useTheme();
const query = useMediaQuery(theme.breakpoints.up('md'));
const ref = useRef(getBottomNavigationActionUtilityClass)
gsap.registerPlugin(Power3,ScrollTrigger)
let tl = gsap.timeline()



 useEffect(() => {
  // tl.from( ref,
  //   {
  //   y:300,
  //   skewY:1.1,
  //   opacity:0,
  //   ease:Power3.easeOut,
  //   duration:3,
  //   scrub:true,
  //   stagger:{
  //       amount:.6
  //   },

  // })

  let element = ref.current
  tl.from(element.querySelector(".portfolio_projects_container"),{
      y:200,
      opacity:0,
      duration:1,
      ease:'elastic',
      delay:.3,    

    scrollTrigger:{
      trigger:(element.querySelector(".portfolio_projects_contents")),
      start:'top top',
      end:'+=500',
      // markers:{startColor:'red', endColor:'blue',fontSize:20,fontWeight:'bold'}
    }
  })
})

  return (
 <Grid  container alignItems='center'justifyContent='center' xs={12}>
     <Grid  alignItems='center' justifyContent='center' maxWidth='1440px' gap='5rem'  container xs={11}>
     
      <Home_Hero/>
      <Home_Bio/>
      

        <Grid gap='1rem' xs={12}  container alignItems='center' justifyContent='center' className='portfolio_projects' >
        <Grid container xs={11.5}  height='6rem'alignItems='center' justifyContent='flex-start' className = "portfolio_projects_header">
        <h1 className="portfolio_projects_header"> Selected <span> Projects</span></h1>

        </Grid>
  <Grid ref={ref} height='100%' gap={query ? '3rem':'5rem'}  container alignItems='flex-start' justifyContent='flex-start' className="portfolio_projects_content">
  {projects}
  </Grid>
        </Grid>
 

    
 
      <Home_Offers/>
      <Home_Work_Experience/>
      <Home_Articles/>
      <Call_to_action/>
     
    </Grid>

 </Grid>
  );
};

export default Home;
