import React from 'react'
import './Navbar.css'
import {Grid,Stack} from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const styles ={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap:'3rem',
    justifyContent: 'center',
  }
  return (
    <Grid container direction='row' height='4rem' backgroundColor='#e5e5e5' xs={11.5} alignItems='center' justifyContent='space-between' className='portfolio_navbar'>
<Grid xs={4} style={styles}  item className='portfolio_navbar_details'>
<p> Bolude Daniel <span>  .  </span></p>
<p> Frontend Developer</p>
</Grid>

<Grid xs={4} style={styles} item  className='portfolio_navbar_actions'>
<div className='portfolio_navbar_actions_links'>
  <Link to ='/'>
    Work
  </Link>

  <Link to ='/'>
    About
  </Link>
</div>

<button className='portfolio_navbar_actions_button'>
 Hit Me Up
</button>
</Grid>

    </Grid>
  )
}

export default Navbar