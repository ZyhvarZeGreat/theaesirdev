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

    <Grid xs={11}container alignItems='center' justifyContent='center' className='portolio_project_header'>

<Grid xs={12} height='20rem'  container direction='column'  alignItems='center' gap='1rem' justifyContent='center' className='portolio_project_header_text'>
<h1 ref={el => headerEl = el}>{props.title}</h1>
<p>{props.subtitle}</p>
</Grid>

<Grid xs={12} height='10rem'  container alignItems='flex-start' justifyContent='center' className='portolio_project_header_description'>
<Grid  textAlign='center' alignItems='center' justifyContent='center'  container xs={10}>
<p>
  {props.desc}
</p>

</Grid>

</Grid>


    </Grid>
  )
}

export default Project_Header