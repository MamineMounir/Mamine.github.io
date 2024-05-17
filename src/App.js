import "./App.css";

import {
  Container,
  NavItem,
  HeroDescription,
  HeroImage,
  HeroSkills,
} from "./components/index";
import {
  Header,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from "./sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
//

//
export default App;
