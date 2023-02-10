import React, { useState } from "react";
import Aside from "./Aside/Aside";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

export default function App() {
  const [activeCont, setActiveCont] = useState({
    home: true,
    about: false,
    services: false,
    portfolio: false,
    contact: false,
  });

  const handleClickAside = (e) => {
    let text = e.target.innerText;
    console.log(e.target.innerText);

    if (text === " Contact") {
      setActiveCont({
        home: false,
        about: false,
        services: false,
        portfolio: false,
        contact: true,
      });
    } else if (text === " About") {
      setActiveCont({
        home: false,
        about: true,
        services: false,
        portfolio: false,
        contact: false,
      });
    } else if (text === " Services") {
      setActiveCont({
        home: false,
        about: false,
        services: true,
        portfolio: false,
        contact: false,
      });
    } else if (text === " Portfolio") {
      setActiveCont({
        home: false,
        about: false,
        services: false,
        portfolio: true,
        contact: false,
      });
    } else {
      setActiveCont({
        home: true,
        about: false,
        services: false,
        portfolio: false,
        contact: false,
      });
    }
  };

  let status = activeCont;

  return (
    <div>
      <Aside status={status} handleClickAside={handleClickAside} />
      <Home status={status} handleClickAside={handleClickAside} />
      <About status={status} handleClickAside={handleClickAside} />
      <Services status={status} handleClickAside={handleClickAside} />
      <Portfolio status={status} handleClickAside={handleClickAside} />
      <Contact status={status} handleClickAside={handleClickAside} />
    </div>
  );
}
