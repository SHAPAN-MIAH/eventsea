"use client";

import Image from "next/image";
import logo from "../../Assets/Images/event sea logo.png";
import style from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className={style.navbar_section}>
      <div className="container">
        <div className={style.nav}>
          <div className="logo_container">
            <Image
              src={logo}
              alt="Picture of the author"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </div>
          <div className={style.nav_menu}>
            <ul>
              <li>Booking</li>
              <li>flight</li>
              <li>Hotel</li>
              <li>Tour</li>
            </ul>
          </div>
          <div className="profile_menu">
            <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
