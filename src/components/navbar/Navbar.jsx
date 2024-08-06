import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
        <div className="navbar">
            <div className="wrapper">
              <motion.span 
              initial={{opacity:0, scale:0.5}}  
              animate={{opacity:1, scale:1}} 
              transition={{duracion:2}}>
              Florangel Orochena</motion.span>
              <div className="social">

                <a href=""><img src="/github.png" alt="" /></a>
                <a href=""><img src="/LinkedIn.png" alt="" /></a>
                <a href="">DOWNLOAD RESUME</a>
              </div>

            </div>
            
            </div>   
    </div>
  )
}

export default Navbar
