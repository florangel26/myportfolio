import { useState, useEffect} from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";


const variants = {
  open:{
   clipPath:"circle(1000px at 50px 50px)",
   backgroundColor: "#fefefe94",
   transition:{
    delay:0.2,
     type:"spring",
     stiffess: 10,
     
   }
  },
  closed:{
   clipPath:"circle(30px at 50px 50px)",
   transition:{
     delay:0.2,
     type:"spring",
     stiffess: 100,
     damping:20,
   }
  }
 }

const Sidebar = () => {
  const [open,setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return  (
   <motion.div className="sidebar" animate={isMounted && open ? "open": "closed"}
   initial={false}>

<motion.div className="bg" variants={variants}>
<Links/>
</motion.div>
<ToggleButton setOpen={setOpen}/>
</motion.div>

) 

};

export default Sidebar;
