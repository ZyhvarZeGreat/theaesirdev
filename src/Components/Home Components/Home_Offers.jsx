import React, {useEffect,useRef} from "react";
import circle from "../../assets/circle.svg";
import redcircle from "../../assets/red-circle.svg"
import fadeIn from '../../Animations/fadein'
import { Grid, Stack } from "@mui/material";
import "./Home_Offers.css";
const Home_Offers = () => {
 

  useEffect(() => {
  fadeIn('.Home_Offers_Items_Text','.Home_Offers_Items_Text h3')
  })
  
  return (
    <Grid
      container
      className="Home_Offers"
      alignItems="flex-start"
      gap="2rem"
      xs={10} md={11}
    >
      <Grid xs={12} direction="column"   container className="Home_Offers_Container --Offers " >
        <h1> I can help you with </h1>
        <Stack gap="3rem" className=" Home_Offers_Items" justifyContent='flex-end' direction="column">
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <img src={circle} /> <h3> Ideation</h3>
          </Stack>

          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <img src={circle} /> <h3>Web Development</h3>
          </Stack>

          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <img src={circle} /> <h3> Application Development </h3>
          </Stack>

          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <img src={circle} /> <h3> Consultations</h3>
          </Stack>

          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <img src={redcircle} />
            <h3 id="red"> SEO</h3>
          </Stack>
        </Stack>
      </Grid>

      <Grid
        xs={12}
        container
        direction="column"
        justifyContent="center"
        gap="4rem"
        className="Home_Offers_Container --Jobs "
      >
        <h1> for </h1>
        <Stack gap="3rem" className="Home_Offers_Items"  item direction="column">
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <img src={circle} /> <h3> Web Apps</h3>
          </Stack>
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <img src={circle} /> <h3>Mobile Apps</h3>
          </Stack>
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <img src={circle} />
            <h3> Web Sites </h3>
          </Stack>
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <img src={redcircle} />
            <h3> Various Digital Products</h3>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home_Offers;
