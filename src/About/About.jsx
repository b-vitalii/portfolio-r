import React from "react";
import { LocationOn, Phone, Mail, Web, Class } from "@material-ui/icons";
import style from "./About.module.css";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I`m Vitalii Boiko and <span>Web Developer</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  consequuntur inventore maiores totam doloremque. Laborum
                  dolores libero expedita quo temporibus quasi, quod aut tempora
                  ducimus vel iusto, recusandae saepe ratione!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Birthday : <span>24 jul 1990</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age : <span>32</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Website
                      <Web />: <span>www.domain.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email
                      <Mail />: <span>vitalii.boiko@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Degree
                      <Class /> : <span>CS</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone
                      <Phone />: <span>+380975555555</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      City
                      <LocationOn />: <span>Kyiv</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Freelnace : <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <button
                      href="#contact"
                      data-section-index="1"
                      className="btn hire-me"
                    >
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>JS</h5>
                    <div className="progress">
                      <div className="progress-in"></div>
                      <div className="skill-percent">86%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>PHP</h5>
                    <div className="progress">
                      <div className="progress-in"></div>
                      <div className="skill-percent">66%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>HTML</h5>
                    <div className="progress">
                      <div className="progress-in"></div>
                      <div className="skill-percent">96%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>CSS</h5>
                    <div className="progress">
                      <div className="progress-in"></div>
                      <div className="skill-percent">76%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      //=======timeline item==========
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2007-2013
                        </h3>
                        <h4 className="timeline-title">
                          Master in Plane Building
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque aspernatur similique quod, voluptates
                          illo perspiciatis quisquam, provident natus eaque eius
                          obcaecati magni impedit minima culpa, veritatis earum
                          porro inventore harum.
                        </p>
                      </div>
                      //=======timeline item==========
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2007-2013
                        </h3>
                        <h4 className="timeline-title">
                          Master in Plane Building
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque aspernatur similique quod, voluptates
                          illo perspiciatis quisquam, provident natus eaque eius
                          obcaecati magni impedit minima culpa, veritatis earum
                          porro inventore harum.
                        </p>
                      </div>
                      //=======timeline item==========
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2007-2013
                        </h3>
                        <h4 className="timeline-title">
                          Master in Plane Building
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque aspernatur similique quod, voluptates
                          illo perspiciatis quisquam, provident natus eaque eius
                          obcaecati magni impedit minima culpa, veritatis earum
                          porro inventore harum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      // =======timeline item==========
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2007-2013
                        </h3>
                        <h4 className="timeline-title">
                          Master in Plane Building
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque aspernatur similique quod, voluptates
                          illo perspiciatis quisquam, provident natus eaque eius
                          obcaecati magni impedit minima culpa, veritatis earum
                          porro inventore harum.
                        </p>
                      </div>
                      // =======timeline item==========
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2007-2013
                        </h3>
                        <h4 className="timeline-title">
                          Master in Plane Building
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque aspernatur similique quod, voluptates
                          illo perspiciatis quisquam, provident natus eaque eius
                          obcaecati magni impedit minima culpa, veritatis earum
                          porro inventore harum.
                        </p>
                      </div>
                      // =======timeline item==========
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2007-2013
                        </h3>
                        <h4 className="timeline-title">
                          Master in Plane Building
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque aspernatur similique quod, voluptates
                          illo perspiciatis quisquam, provident natus eaque eius
                          obcaecati magni impedit minima culpa, veritatis earum
                          porro inventore harum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
