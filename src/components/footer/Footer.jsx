import React from "react";
import footerData from "./footerData";
function Footer() {
  return (
    <section className="footer footer--1x5 container">
      {footerData.map((item, index) => {
        return (
          <div key={index} className="footer__menu">
            <h4 className="footer__heading">{item.heading}</h4>
            <ul>
              {item.submenu.map((val, index) => (
                <li className="footer__submenu" key={index}>
                  {val}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <div className="copyright">
        <h5>Gods Reign &copy; 2022, All rights reserved</h5>
      </div>
      <div className="designer">
        <h5>Designed with ❤️ By RD</h5>
      </div>
    </section>
  );
}

export default Footer;
