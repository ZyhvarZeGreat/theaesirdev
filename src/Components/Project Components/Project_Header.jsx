import React,{useRef,useEffect} from 'react'
import './Project_Header.css'
import {UilArrowRight} from '@iconscout/react-unicons'
import { Projects_Data } from './Projects_Data';
import { gsap,Power3,ScrollTrigger } from "gsap/all";
import { Grid,useMediaQuery,useTheme } from '@mui/material'
import { useParams } from 'react-router-dom';
const Project_Header = (header) => {
 let headerEl = useRef();
 let tl  = gsap.timeline()

 const {projectdetails} = useParams()

 const titles = Projects_Data.find((project) => project.id === projectdetails)

 const {Title,subTitle,desc} = titles
//  const {title,subtitle,desc} = header
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
<h1 ref={el => headerEl = el}>{Title}</h1>
<p>{subTitle}</p>
</Grid>

<Grid xs={12} height='10rem'  container alignItems='flex-start' justifyContent='center' className='portolio_project_header_description'>
<Grid  textAlign='center' alignItems='center' justifyContent='center'  container xs={10}>
<p>
  {desc}
</p>

</Grid>

</Grid>


    </Grid>
  )
}

export default Project_Header