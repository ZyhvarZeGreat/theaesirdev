import React,{useRef,useEffect} from "react";
import './Home_Hero.css'
import spiral from  '../../assets/spiral.svg';
import { TweenMax,Timeline,Power3} from "gsap/gsap-core";
import { Grid,useTheme,useMediaQuery } from "@mui/material";
const Home_Hero = () => {


  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('md'))
  function mobileQuery(param1,param2){
    query ? param1:param2
  }
  return (
    <Grid   direction='row' height={query ? '50rem':'60rem'} alignItems='center'  justifyContent='center'  xs={11.5} className="portfolio_hero">

      <Grid xs={12} className='spiral'>
        <img src={spiral} alt='spiral'/>
      </Grid>
      <Grid container  xs={11.5} alignItems='center'  className="portfolio_hero_container">
     <Grid   xs={12}  container   className='portfolio_hero_header'>
  <Grid alignItems={query ? 'center': 'flex-start'}    justifyContent={query ? 'center': 'flex-start'} container  md={9} xs={12}>
  <h1>
          <span  className="portfolio_hero_header_cta">High-class  software development  </span>
          for innovative startups and medium-size companies that understand<br/>  the
          value of quality developers. <br/> Let's turn your idea into a business together.
        </h1>
  </Grid>

      <Grid  item className='portfolio_hero_header_notification' xs={11} md={3}>
      <h3> Available for work<br/> from  May 1st 2022</h3>
      </Grid>
     </Grid>
 
      </Grid>
    </Grid>
  );
};

export default Home_Hero;
