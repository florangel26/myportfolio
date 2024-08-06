import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="textContainer">
            <h2>Hi, I'm Florangel Orochena</h2>
            <h1>Frontend developer and UX/UI Designer</h1>
            <div className="buttons">
                <button>Contact Me</button>
            </div>
            <img src="/scroll.png" alt="" />
        </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
