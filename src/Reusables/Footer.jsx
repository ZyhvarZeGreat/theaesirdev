import React from "react";
import { Link } from "react-router-dom";
import message from '../assets/message.svg'
import "./Footer.css";
import { Grid ,Stack,useTheme,useMediaQuery} from "@mui/material";
const Footer = () => {
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('sm'))
  function mobileQuery(param1,param2){
    query ? param1:param2
  }
  return (
 
  <Grid container  alignItems='center' justifyContent='center' xs={12} className='portfolio_footer'>
  <Grid  height='100%' item gap='2rem' xs={11.5} className='portfolio_footer_container'>
  <Grid container alignItems='center' justifyContent='center'  className='portfolio_footer_details'  xs={12}>
      <Grid xs={12} md={6}container alignItems='center'justifyContent='flex-end' className='portfolio_footer_details_text'>
       <div className='portfolio_footer_details_text_container'>
       <h1 className="portfolio_footer_details_text_header"> Let's Create<br/> Something people <br/> actually need - <br/> <img className="portfolio_footer_details_image" src={message} alt=''/>  <a className="portfolio_footer_email_link" href=''>hello@theaesir.dev </a> </h1>
       </div>
      </Grid>
      <Grid xs={12} md={6} direction='column' alignItems='flex-end' justifyContent='center' container className='portfolio_footer_details_social_media_links'>
<Stack width= {query ? '60%' : '90%' }alignItems={'flex-start'} className='portfolio_footer_details_social_media_links_container'>
<a href=''> <h1>Github</h1></a>
  <a href=''> <h1>LinkedIn</h1></a>
  <a href=''> <h1>Twitter</h1></a>
  <a href=''> <h1>Instagram</h1></a>
</Stack>
      </Grid>
    </Grid>

    <Grid  container alignItems='center' justifyContent='center' xs={12} className = 'portfolio_footer_actions'>
  <Stack width='100%' height='100%' gap='1rem' direction='column' alignItems='center' justifyContent='center'
   className = 'portfolio_footer_actions_container'>
<Stack gap='1rem' alignItems='center' textAlign='center' className = 'portfolio_footer_actions_text'>
<h1> Subscribe to my newsletter</h1>
      <p> Get an occasional update for a new project,<br/> article or product announcement from me. <br/> Due respect to your time,no BS expected </p>
</Stack>
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
