import React, { useEffect, useRef } from "react";
import circle from "../../assets/circle.svg";
import redcircle from "../../assets/red-circle.svg";
import { Power3, ScrollTrigger } from "gsap/src/all";
import { gsap } from "gsap";
import fadeIn from "../../Animations/fadein";
import { motion } from "framer-motion";
import { Grid, Stack } from "@mui/material";
import "./Home_Offers.css";

const Home_Offers = () => {
  gsap.registerPlugin(Power3, ScrollTrigger);
  const elementRef = useRef(null);
  const targetRef = useRef(null);

  const offerVariants = {
    initial: {
      opacity: 0,
      y: 300,
      skewX: 4,
    },
    animate: {
      opacity: 1,
      y: 0,
      skewX: 0,
      transition: { duration: 2, type: "spring", ease: "easeIn", delay: 0.3 },
    },
  };
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.from(elementRef, {
  //     scrollTrigger: {
  //       trigger: targetRef,
  //       start: "top top",
  //       end: "bottom",
  //       // markers:{fontSize:"24px",startColor:'blue',endColor:'red'}
  //     },
  //     y: 300,
  //     skewX: 1,
  //     opacity: 0,
  //     ease: Power3.easeOut,
  //     duration: 2,
  //     delay:.8,
  //     scrub: true,
  //     stagger: {
  //       amount: 0.6,
  //     },
  //   });
  //   console.log(elementRef,targetRef)
  // }, []);

  return (
    <Grid
      container
      className="Home_Offers"
      alignItems="flex-start"
      gap="2rem"
      xs={11}
      md={12}
    >
      <Grid
        xs={12}
        direction="column"
        container
        className="Home_Offers_Container --Offers "
      >
        <h1> I can help you with </h1>
        <Stack
          gap="3rem"
          className=" Home_Offers_Items"
          justifyContent="flex-end"
          direction="column"
          ref={elementRef}
        >
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <motion.div
              viewport={"all"}
              whileInView={true}
              initial={{ opacity: 0, y: 300, skewX: 4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                ease: "easeIn",
                delay: 0.1,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={circle} /> <h3 ref={targetRef}> Ideation</h3>
            </motion.div>
          </Stack>

          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <motion.div
              whileInView={true}
              initial={{ opacity: 0, y: 300, skewX: 4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                ease: "easeIn",
                delay: 0.15,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={circle} /> <h3 ref={targetRef}>Web Development</h3>
            </motion.div>
          </Stack>

          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <motion.div
              whileInView={true}
              initial={{ opacity: 0, y: 300, skewX: 4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                ease: "easeIn",
                delay: 0.2,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={circle} />{" "}
              <h3 ref={targetRef}> Application Development </h3>
            </motion.div>
          </Stack>

          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <motion.div
              whileInView={true}
              initial={{ opacity: 0, y: 300, skewX: 4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                ease: "easeIn",
                delay: 0.25,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={circle} /> <h3 ref={targetRef}> Consultations</h3>
            </motion.div>
          </Stack>

          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <motion.div
              whileInView={true}
              initial={{ opacity: 0, y: 300, skewX: 4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                ease: "easeIn",
                delay: 0.3,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={redcircle} />
              <h3 id="red" ref={targetRef}>
                SEO
              </h3>
            </motion.div>
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
        <Stack gap="3rem" className="Home_Offers_Items" item direction="column">
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <motion.div
              whileInView={true}
              initial={{ opacity: 0, y: 300, skewX: 4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                ease: "easeIn",
                delay: 0.5,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={circle} /> <h3 ref={targetRef}> Web Apps</h3>
            </motion.div>
          </Stack>
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <motion.div
              whileInView={true}
              initial={{ opacity: 0, y: 300, skewX: 4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                ease: "easeIn",
                delay: 0.6,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={circle} /> <h3 ref={targetRef}>Mobile Apps</h3>
            </motion.div>
          </Stack>
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <motion.div
              whileInView={true}
              initial={{ opacity: 0, y: 300, skewX: 4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                ease: "easeIn",
                delay: 0.7,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={circle} />
              <h3 ref={targetRef}> Web Sites </h3>
            </motion.div>
          </Stack>
          <Stack
            className="Home_Offers_Items_Text"
            gap="1.5rem"
            direction="row"
            alignItems="center"
          >
            <motion.div
              whileInView={true}
              initial={{ opacity: 0, y: 300, skewX: 4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 2,
                type: "spring",
                ease: "easeIn",
                delay: 0.8,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={redcircle} />
              <h3 ref={targetRef}> Various Digital Products</h3>
            </motion.div>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home_Offers;
