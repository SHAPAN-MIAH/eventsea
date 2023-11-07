
import React from 'react';
import logo from "../../Assets/Images/eventsea.png"
import style from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={style.navbar_section}>
      <div className='container'>
        <div className={style.nav}>
          <div className='logo_container'>
            {/* <img src={logo} alt=""/> */}
            <h3>Event Sea</h3>

          </div>
          <div className={style.nav_menu}>
            <ul>
              <li>Booking</li>
              <li>flight</li>
              <li>Hotel</li>
              <li>Tour</li>
            </ul>
          </div>
          <div className='profile_menu'>
            <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;