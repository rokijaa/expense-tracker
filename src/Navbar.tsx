import React, {useState} from "react";
import './navbar.scss'

export function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <ion-icon name="wallet"/>
        CashTrack
      </a>
      <ul className={active}>
        <li className="nav__item">
          <ion-icon name="home-outline"/>
          <a href="#" className="nav__link">
            Dashboard
          </a>
        </li>
        <li className="nav__item">
          <ion-icon name="stats-chart"/>
          <a href="#" className="nav__link">
            Expenses
          </a>
        </li>
        <li className="nav__item">
          <ion-icon name="pie-chart-outline"/>
          <a href="#" className="nav__link">
            Reports
          </a>
        </li>
        <li className="nav__item">
          <ion-icon name="settings-outline"/>
          <a href="#" className="nav__link">
            Settings
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}