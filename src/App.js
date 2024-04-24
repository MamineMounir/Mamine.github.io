import "./App.css";
import { Contact, Container, NavItem } from "./components/index";
import { Header, Hero, About, Footer, Projects } from "./sections/index";

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
export default App;
