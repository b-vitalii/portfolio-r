import React from "react";
import Aside from "./Aside/Aside";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

export default function App() {
  return (
    <div>
      <Aside />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
