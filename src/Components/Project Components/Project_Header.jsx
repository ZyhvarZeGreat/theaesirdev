import React,{useRef,useEffect} from 'react'
import './Project_Header.css'
import {UilArrowRight} from '@iconscout/react-unicons'
import { gsap,Power3,ScrollTrigger } from "gsap/all";
import { Grid,useMediaQuery,useTheme } from '@mui/material'
const Project_Header = (props) => {
 let headerEl = useRef();
 let tl  = gsap.timeline()

  useEffect(() => {
  tl.from(headerEl,{
    y:200,
    opacity:0,
    duration:1,
  })
  })
  return (

    <Grid  xs={11}container alignItems='center' justifyContent='space-between' className='portolio_project_header'>

<Grid xs={12} height='20rem' backgroundColor='azure' container direction='column'  alignItems='center' gap='2rem' justifyContent='center' className='portolio_project_header_text'>
<h1 ref={el => headerEl = el}>Urcrypto</h1>
<p> A Landing page and dashboard geared towards crypto transactions</p>
</Grid>

<Grid xs={12} height='20rem' container alignItems='center' justifyContent='flex-start' className='portolio_project_header_description'>
<Grid height='12rem' backgroundColor='blue' container xs={12}>
<p> Urcrypto was my first project , and i intended it to be  an exploration of a centralized exchange <br/> 
 the end goal of the project was to enable users to make transactions seamlessly hitch and hassle free
</p>

</Grid>

</Grid>


    </Grid>
  )
}

export default Project_Header