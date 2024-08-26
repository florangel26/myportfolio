import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';


const variants = {
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}



const Contact = () => {

 const formRef = useRef();
 const [error, setError] = useState(false);
 const [success, setSuccess] = useState(false);

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_j7st2zo', 'template_3v91t0p', formRef.current, {
      publicKey: 'YWoBUwdEMCEwKgxcU',
    })
    .then(
      (result) => {
        setSuccess(true)
      },
      (error) => {
        setError(true)
      },
    );
};

  return (
    
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>

        <motion.h1  variants={variants} >Let's Connect</motion.h1>
        <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>flory26991@gmail.com</span>
        </motion.div>
        <motion.div className="item"  variants={variants}>
            <h2>Phone</h2>
            <span>+56 948469496</span>
        </motion.div>
        <motion.div className="item"  variants={variants}>
            <h2>Network</h2>
             <a href="https://linkedin.com/in/f-orochena2609" target="_blank"> <span></span>LinkedIn</a>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div className="mailSvg" 
        initial= {{opacity:1}}
         whileInView={{opacity:0}} 
         transition={{ delay: 3, duration: 1 }}>
      <svg viewBox="0 2.80 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#6a0097" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path 
      d="M9.00977 21.39H19.0098C20.0706 21.39 21.0881 20.9685 21.8382 20.2184C22.5883 19.4682 23.0098 18.4509 23.0098 17.39V7.39001C23.0098 6.32915 22.5883 5.31167 21.8382 4.56152C21.0881 3.81138 20.0706 3.39001 19.0098 3.39001H7.00977C5.9489 3.39001 4.93148 3.81138 4.18134 4.56152C3.43119 5.31167 3.00977 6.32915 3.00977 7.39001V12.39" stroke="#6a0097" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1.00977 18.39H11.0098" stroke="#6a0097" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1.00977 15.39H5.00977" stroke="#6a0097" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22.209 5.41992C16.599 16.0599 9.39906 16.0499 3.78906 5.41992" stroke="#6a0097" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </motion.div>
        <motion.form  
        ref= {formRef}
        onSubmit={sendEmail}
        initial= {{opacity:0}}
         whileInView={{opacity:1}} 
         transition={{ delay: 4, duration: 1 }}>
            <input type="text" required placeholder="Name" name= "name" />
            <input type="email" required placeholder="Email" name= "email"/>
            <textarea type="textarea" rows={8} placeholder="Message" name= "message"></textarea>
            <button>Let's Talk</button>
            {error && "Error"}
            {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact


