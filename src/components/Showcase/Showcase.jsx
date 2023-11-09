"use client";
import React from "react";
import showcaseBanner from "../../Assets/Images/3 EO IGM banner.jpg";
import Image from "next/image";
import style from "./showcase.module.css";

const Showcase = () => {
  return (
    <div className="showcase_banner_section">
      <div className={style.showcase_banner_container}>
        {/* <Image
          src={showcaseBanner}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        /> */}

        <div className={style.search_container}>
          <div className={style.search_menu_bar}>
            <ul>
              <li>Booking</li>
              <li>flight</li>
              <li>Hotel</li>
              <li>Tour</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
