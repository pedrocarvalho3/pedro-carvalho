import { NavBar } from "./components/NavBar";
import "./styles/main.css";

import image1 from "./images/img1.png";
import { Introduction } from "./components/Introduction";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <div>
      <NavBar />
      <img src={image1} alt="Paisagem com Montanha" className="w-full" />
      <Introduction />
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}
