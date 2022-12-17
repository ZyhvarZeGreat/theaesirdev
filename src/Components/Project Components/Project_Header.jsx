import React from 'react'
import './Project_Header.css'
import {UilArrowRight} from '@iconscout/react-unicons'
import { Grid,useMediaQuery,useTheme } from '@mui/material'
const Project_Header = (props) => {
  return (
    <Grid  xs={11}container alignItems='center' justifyContent='space-between' className='portolio_project_header'>

<Grid xs={12} container direction='column' textAlign='start' alignItems='flex-start' justifyContent='flex-start' className='portolio_project_header_text'>

</Grid>

<Grid xs={12} container alignItems='center' justifyContent='flex-start' className='portolio_project_header_description'>
<Grid xs={12} md={6}>
<p> Urcrypto was my first project , and i intended it to be  an exploration of a centralized exchange <br/> 
 the end goal of the project was to enable users to make transactions seamlessly hitch and hassle free
</p>

</Grid>
<Grid xs={12} md={6} container alignItems='center' justifyContent='center' className=' portolio_project_header_description_link'>
<a href='https://theaesirdev.vercel.app/'>  Open Project <UilArrowRight height='25px' width='25px'/> </a>
</Grid>
</Grid>


    </Grid>
  )
}

export default Project_Header