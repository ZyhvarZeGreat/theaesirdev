import React from 'react'
import { Navbar,Footer } from '../../Reusables/index'
import {Grid,Stack} from '@mui/material'
const Projects = () => {
  return (
    <Grid container xs={11.5} alignSelf='center' alignItems='center' justiyContent='center' className='portolio_projects'>
   <Navbar/>
   <Footer/>
      </Grid>
  )
}

export default Projects