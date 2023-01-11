import React from 'react'
import './Navbar.css'
import circle from "../assets/circle.svg";
import {Grid,Stack,useTheme,useMediaQuery} from '@mui/material'
import {Link as NavLink} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from 'react-router-dom'
const Navbar = (props) => {

  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))
  function mobileQuery(param1,param2){
    query ? param1:param2
  }

  return (
    <Grid marginTop='2rem'   container direction='row' height='6rem'    xs={12} md={11} alignItems='center' justifyContent='center' className='portfolio_navbar'>
<Grid xs={12} sm={6}   direction='row'  alignItems={query ? 'center': 'flex-start'} justifyContent={query ? 'flex-start': 'center'}  container className='portfolio_navbar_details'>
<NavLink className='portfolio_navbar_home_link' to = '/'>
 Bolude Daniel <img src={circle}/>  Frontend Developer
</NavLink>
</Grid>

<Grid xs={12} sm={6}   direction='row' gap={query ? '4rem':'2rem'} alignItems='center'  justifyContent={query ? 'flex-end': 'center'}  container  className='portfolio_navbar_actions'>
<div className='portfolio_navbar_actions_links'>
  <Link spy={true} smooth={true} duration={300} to ={props.to}>
    Work
  </Link>

  <Link spy={true} smooth={true} duration={300} to ={props.to}>
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