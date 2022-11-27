import React from "react";
import { Link } from "react-router-dom";
import message from '../assets/message.svg'
import "./Footer.css";
import { Grid ,Stack} from "@mui/material";
const Footer = () => {
  return (
 
  <Grid marginTop='5rem'  container  alignItems='center' justifyContent='center' xs={12} className='portfolio_footer'>
  <Grid container gap='2rem' xs={11.5} className='portfolio_footer_container'>
  <Grid container alignItems='center' justifyContent='center'  className='portfolio_footer_details'  xs={12}>
      <Grid xs={12} md={6}container alignItems='center'justifyContent='flex-end' className='portfolio_footer_details_text'>
       <div className='portfolio_footer_details_text_container'>
       <h1> Let's Create<br/> Something people <br/> actually need - <br/> <img className="portfolio_footer_details_image" src={message} alt=''/>  <a className="portfolio_footer_email_link" href=''>hello@theaesir.dev </a> </h1>
       </div>
      </Grid>
      <Grid xs={12} md={6} direction='column' alignItems='flex-end' justifyContent='center' container className='portfolio_footer_details_social_media_links'>
<div className='portfolio_footer_details_social_media_links_container'>
<a href=''> <h1>Github</h1></a>
  <a href=''> <h1>LinkedIn</h1></a>
  <a href=''> <h1>Twitter</h1></a>
  <a href=''> <h1>Instagram</h1></a>
</div>
      </Grid>
    </Grid>

    <Grid container alignItems='center' justifyContent='center' xs={12} className = 'portfolio_footer_actions'>
  <Stack direction='column' alignItems='center' justifyContent='center'
  gap='.5rem' className = 'portfolio_footer_actions_container'>
<div className = 'portfolio_footer_actions_text'>
<h1> Subscribe to newsletter</h1>
      <p> Get an occasional update for a new project,<br/> article or product announcement from me. <br/> Due respect to your time,no BS expected </p>
</div>
    <form className="portfolio_footer_actions_form">
    <input type='email' placeholder="Enter your email address"/>
      <button className="portfolio_footer_submit button" type='submit'>
        Subscribe
      </button>
    </form>
  </Stack>
    </Grid>
  </Grid>
  </Grid>
  );
};

export default Footer;
