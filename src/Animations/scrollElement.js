import { ScrollTrigger } from "gsap/src/all";
import { Power3, Timeline } from "gsap/gsap-core";
import { gsap } from "gsap";



function scrollElement (el,targetEl){
    gsap.registerPlugin(Power3,Timeline,ScrollTrigger)
    const tl = gsap.timeline()

    tl.from(el,{
        scrollTrigger: {
            trigger: targetEl,
            start:'top top',
            end:'+=200',
            markers:{startColor:'blue',endColor:'red',fontSize:'20px',fontWeight:'bold'}
                },
        y:300,
        skewY:1.1,
        opacity:0,
        ease:Power3.easeOut,
        duration:3,
        scrub:true,
        stagger:{
            amount:.6
        },
     
    }) 
}

export default scrollElement