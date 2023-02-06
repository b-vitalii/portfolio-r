import React from "react";
import { MobileFriendly, Computer, Palette } from "@material-ui/icons";
import style from "./Services.module.css";

export default function Services() {
  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          // ======Services item Start========
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-mobile-alt">
                  <MobileFriendly />
                </i>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                sapiente explicabo dolor, quibusdam vero impedit sint eligendi
                dolorem tenetur, dolore nam voluptates quidem placeat
                dignissimos facere temporibus omnis veniam molestias.
              </p>
            </div>
          </div>
          // ======Services item End======== // ======Services item
          Start========
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-laptop-code">
                  <Computer />
                </i>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                sapiente explicabo dolor, quibusdam vero impedit sint eligendi
                dolorem tenetur, dolore nam voluptates quidem placeat
                dignissimos facere temporibus omnis veniam molestias.
              </p>
            </div>
          </div>
          // ======Services item End======== // ======Services item
          Start========
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-palette">
                  <Palette />
                </i>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                sapiente explicabo dolor, quibusdam vero impedit sint eligendi
                dolorem tenetur, dolore nam voluptates quidem placeat
                dignissimos facere temporibus omnis veniam molestias.
              </p>
            </div>
          </div>
          // ======Services item End======== // ======Services item
          Start========
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-code">
                  <MobileFriendly />
                </i>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                sapiente explicabo dolor, quibusdam vero impedit sint eligendi
                dolorem tenetur, dolore nam voluptates quidem placeat
                dignissimos facere temporibus omnis veniam molestias.
              </p>
            </div>
          </div>
          // ======Services item End======== // ======Services item
          Start========
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-search">
                  <MobileFriendly />
                </i>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                sapiente explicabo dolor, quibusdam vero impedit sint eligendi
                dolorem tenetur, dolore nam voluptates quidem placeat
                dignissimos facere temporibus omnis veniam molestias.
              </p>
            </div>
          </div>
          // ======Services item End======== // ======Services item
          Start========
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-bullhorn">
                  <MobileFriendly />
                </i>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                sapiente explicabo dolor, quibusdam vero impedit sint eligendi
                dolorem tenetur, dolore nam voluptates quidem placeat
                dignissimos facere temporibus omnis veniam molestias.
              </p>
            </div>
          </div>
          // ======Services item End========
        </div>
      </div>
    </section>
  );
}
