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

 const theme = useTheme()
 const query = useMediaQuery(theme.breakpoints.up("md"))
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

<Grid xs={12} height={query ? '20rem':'13rem'} textAlign='center' container direction='column'  alignItems='center' gap='1rem' justifyContent='center' className='portolio_project_header_text'>
<h1 className='portfolio_projects_header' ref={el => headerEl = el}>{Title}</h1>
<p>{subTitle}</p>
</Grid>

<Grid xs={12} height={query ? '10rem':'18rem' } container alignItems={query ? 'flex-start':'center'} justifyContent='center' className='portolio_project_header_description'>
<Grid  textAlign='center' alignItems='center' justifyContent='center'  container xs={11.5} md={10}>
<p className='portolio_project_header_description'>
  {desc}
</p>

</Grid>

</Grid>


    </Grid>
  )
}

export default Project_Header