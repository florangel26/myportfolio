import "./hero.scss"
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity:0,
  },
  animate: {
    x: 0,
    opacity:1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,

    },
  },

  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};
const sliderVariants = {
  initial: {
    x: 0, 
  },
  animate: {
    x: "-220%",
    transition: {
      repeat:Infinity,
      reapeatType: "mirror",
      duration: 40,
   

    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial= "initial" animate="animate">
            <motion.h2 variants={textVariants} >Hi, I'm Flor Orochena</motion.h2>
            <motion.h1 variants={textVariants}>Frontend developer <br/>
               UX/UI Designer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
            <a href="https://wa.me/+56948469496" target="_blank" rel="noopener noreferrer">
                <motion.button variants={textVariants} >Contact Me</motion.button></a>
            </motion.div>
        </motion.div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial= "initial" animate="animate" >
        Frontend developer - UX/UI Designer
        </motion.div>
        </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" className="hero"/>
      </div>
    </div>
  )
}

export default Hero
