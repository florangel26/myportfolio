import "./skills.scss"
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="skills">
     
      
      <motion.div className="listContainer">
  
       <motion.div className="box" whileHover={{background:"lightgray", color:"black" }}>
     
        <h2>Hard Skills</h2>
        <ul>
          <li> HTML5, CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js, Vue.js</li>
          <li>Git & Version Control</li>
          <li>Responsive Design</li>
          <li> Figma </li>
          <li> RESTful APIs </li>
          <li> SEO Best Practices </li>
          <li> Debugging & Problem-Solving </li>
        </ul>
        
       </motion.div>
       <motion.div className="box" whileHover={{background:"lightgray", color:"black" }} >
        <h2>Soft Skills </h2>
        <ul>
          <li>Creativity and Innovation</li>
          <li>Attention to Detail</li>
          <li>Effective Communication</li>
          <li>Collaboration and Teamwork</li>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Empathy for Users</li>
          <li>Critical Thinking</li>
          <li>Continuous Learning Mindset</li>
        </ul>
       
       </motion.div>

      </motion.div>
    </div>
  )
}

export default Skills
