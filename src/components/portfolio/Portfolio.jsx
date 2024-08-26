import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
  {
    id:1,
   title: "ClassWise",
    img: "/proyecto1.png",
    desc:"Developed a Class Reservation System using Vue.js, featuring an admin panel for managing schedules, reservations, and user accounts. Integrated with Firebase for real-time data management and secure authentication, the system also uses a weather API to provide real-time updates, enhancing the booking process for outdoor classes.",
    tecno:"Tech Stack",
    stacks:"/vue.svg",
    stacks1:"/js.png",
    stacks2:"/firebase.png",
    stacks3:"/Cypress.png",
  },
  {
    id:2,
       title: "Dating site",
        img: "/proyecto2.png",
        desc:"Developed a dynamic dating website utilizing Python, HTML, and JavaScript. The project involved creating detailed mockups in Figma to guide the design process and ensure a user-friendly interface. The website features a responsive design with interactive elements, and leverages Python for backend functionalities, including user authentication and data management, while HTML and JavaScript handle the front-end interactions and user experience. The Figma mockups facilitated a smooth design-to-development transition, resulting in a polished and effective dating platform.",
        tecno:"Tech Stack",
        stacks:"/python.png",
        stacks1:"/js.png",
        stacks2:"/figma.png",
        stacks3:"/bootstrap.png",
      },
      {
        id:3,
           title: "GPT Potenza",
            img: "/proyecto3.png",
            desc:"Created the GPT Potenza website using WordPress and Elementor, focusing on delivering a visually compelling and highly functional platform. Emphasized best practices in SEO using Yoast SEO to optimize the site for search engines, ensuring improved visibility and search rankings. The project involved custom designing pages with Elementor, resulting in a seamless user experience, while leveraging WordPress's powerful CMS capabilities to ensure ease of content management and scalabilit",
            tecno:"Tech Stack",
            stacks:"/elementor.png",
            stacks1:"/js.png",
            stacks2:"/wordpress.png",
          },
          {
            id:4,
               title: "Pokedex",
                img: "/proyecto4.png",
                desc:"I built a classic Pokédex using HTML, CSS, and JavaScript, focusing on recreating the look and feel of the original Pokédex. I designed the interface to be responsive, so it works well on any device. Using JavaScript, I added interactive features like searching for Pokémon and displaying their details. It was a fun project that let me combine my love for coding with my nostalgia for Pokémon, and I’m really proud of how it turned out.",
                tecno:"Tech Stack",
                stacks1:"/js.png",
              },
              {
                id:5,
                   title: "Oh Balance",
                    img: "/proyecto5.png",
                    desc:"I worked on a brand identity and logo design project where I used Photoshop and Illustrator to bring the brand’s vision to life. I created a logo that truly reflects what the brand stands for, and developed a full branding package with consistent colors, fonts, and visual guidelines. The goal was to make sure everything looked and felt cohesive across all platforms",
                    tecno:"Tech Stack",
                    stacks:"/figma.png",
                    stacks2:"/psai.png",
                    
                   
                  },
                  {
                    id:6,
                       title: "Veterinary",
                        img: "/proyecto6.png",
                        desc:"I worked on a UX/UI project where I designed the prototype for a website, focusing on creating a smooth and user-friendly experience. I started by doing user research to understand what the audience needed, which really helped shape the design decisions. I used wireframes and interactive prototypes to plan out the user journey and key interactions. The final prototype was detailed enough to guide the development team, making sure that the design was implemented just as intended and resulted in a seamless experience for users.",
                        tecno:"Tech Stack",
                        stacks:"/figma.png",
                      },
                      {
                        id:7,
                           title: "Food app",
                            img: "/proyecto7.png",
                            desc:"I worked on a UX/UI project where I focused on optimizing the layout for an app to ensure the correct placement of elements for the best user experience. My main goal was to create a layout that was intuitive and easy to navigate. I carefully considered how users interact with the app, placing key elements in positions that are most accessible and logical. This involved extensive prototyping and testing to make sure that every button, menu, and feature was where users expected it to be. ",
                            tecno:"Tech Stack",
                            stacks:"/figma.png",
                          },
                          {
                            id:8,
                               title: "Sushi app",
                                img: "/proyecto8.png",
                                desc:"In this proyect layout for an app, prioritizing the precise placement of elements to maximize usability. My approach was centered on understanding user behavior, which informed the strategic positioning of buttons, menus, and interactive features. Through iterative prototyping and user testing, I ensured that every element was intuitively placed, leading to a clean, efficient, and user-friendly interface.",
                                tecno:"Tech Stack",
                                stacks:"/figma.png",
                              },
                                
                            
                        
                    
                    
                

];

const Single = ({item}) => {
    const ref= useRef();
    
    const { scrollYProgress } = useScroll({target:ref,});
 
const y = useTransform(scrollYProgress, [0, 1], [-600, 600])

   


 return (
<section >
  <div className="container">
    <div className="wrapper">
    <div className="imgContainer" ref= {ref}>
    <img src={item.img} alt="" />
    </div>
    <motion.div className="textContainer" style={{y}}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <h4>{item.tecno}</h4>
        <div className="container">
        <img className="stacks"src={item.stacks} alt=""/>
     
        <img className="stacks stacks2"src={item.stacks2} alt="" />
        <img className="stacks stacks3"src={item.stacks3} alt="" />
        <img className="stacks stacks1"src={item.stacks1} alt="" />
        </div>
        </motion.div>
    </div>
  </div>


</section>)
 };



const Portfolio = () => {

    const ref= useRef();

    const { scrollYProgress } = useScroll({        target:ref, 
    offset:["end end" , "start start"]});


    const scaleX = useSpring(scrollYProgress,
        { stiffness: 100,
            damping : 30,

        });




  return (
    <div className="portfolio" ref={ref}>

        <div className="progress">
            <h1> Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
      {items.map ((item) => (
        <Single item={item} key={item.id} />
      )) }
    </div>
  );
}

export default Portfolio
