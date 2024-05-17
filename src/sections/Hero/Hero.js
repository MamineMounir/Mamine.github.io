import "./Hero.css";
import HeroImage from "../../components/HeroImage/HeroImage";
import HeroDescription from "../../components/HeroDescription/HeroDescription";
import HeroSkills from "../../components/HeroSkills/HeroSkills";

const Hero = () => {
  return (
    <section id="hero" className="text-dark text-center text-lg-start bg-light">
      <div className="container">
        <div className="row justify-content-center" id="changerow">
          <HeroImage />
          <HeroDescription />
        </div>
        <HeroSkills />
      </div>
    </section>
  );
};

export default Hero;
