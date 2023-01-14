import { Power3, ScrollTrigger } from "gsap/src/all";
import { gsap } from "gsap";

function fadeIn(el, targetEl) {
  gsap.registerPlugin(Power3, ScrollTrigger);
  const tl = gsap.timeline();

  tl.from(el, {
    scrollTrigger: {
      trigger: targetEl,
      start: "top 90%",
      end: "bottom",
    },
    y: 300,
    skewX: 1,
    opacity: 0,
    ease: Power3.easeOut,
    duration: 2,
    delay:.8,
    scrub: true,
    marker:true,
    stagger: {
      amount: 0.6,
    },
  });
}

export default fadeIn;
