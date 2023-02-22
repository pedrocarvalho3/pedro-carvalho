import { NavBar } from "./components/NavBar";
import "./styles/main.css";

import db from '../db.js'

import image1 from "../assets/img1.png";
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
      <Projects projects={db} />
      <Contact />
    </div>
  );
}
