import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
        <div className="navbar">
            <div className="wrapper">
             
              <div className="social">

                <a href="https://github.com/florangel26"target="_blank" ><img src="/github.png" alt="" /></a>
                <a href="https://linkedin.com/in/f-orochena2609" target="_blank"><img src="/LinkedIn.png" alt="" /></a>
                <a href="/public/CVENFLOROROCHENA.pdf" download> CV English</a>
                <a href="/public/CVESFLOROROCHENA.pdf"download>CV Español</a>
              </div>

            </div>
            
            </div>   
    </div>
  )
}

export default Navbar
