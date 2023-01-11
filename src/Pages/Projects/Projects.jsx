import React from 'react'
import { Project_Body,Project_Header } from '../../Components/Project Components/index'
import { Navbar,Footer } from '../../Reusables/index'
import {Grid,Stack} from '@mui/material'
import { Content} from './Content'
import {header} from './header'
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
      <Stack width="90%" height="7rem">
        <Navbar />
      </Stack>
      <Project_Header {...header} />
      <Project_Body
     {...Content}
      />
    </Grid>
    <Footer />
  </div>
  )
}

export default Projects