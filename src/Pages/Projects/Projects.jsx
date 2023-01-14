import React from 'react'
import { Project_Body,Project_Header } from '../../Components/Project Components/index'
import { Navbar,Footer } from '../../Reusables/index'
import {Grid,Stack} from '@mui/material'
import { Content} from './Content'
import {header} from './header'
import './Projects.css'
import { useParams } from 'react-router-dom'
const Projects = () => {
  const {projectdetails} = useParams()


  return (
    <div className="portfolio_projects">
    <Grid
      container
      xs={12}
      alignItems="center"
      justifyContent="center"
      gap="5rem"
      direction="column"
      maxWidth="1440px"
      className="portolio_projects_container"
    >
      <Stack  alignItems='center' justifyContent='center'  width="90%">
      <Project_Header  {...header} />
      </Stack>

      <Project_Body
     {...Content}
      />
    </Grid>
  </div>
  )
}

export default Projects