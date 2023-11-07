"use client";
import React from "react";
import showcaseBanner from "../../Assets/Images/banner.jpg";
import Image from "next/image";
import style from "./showcase.module.css";

const Showcase = () => {
  return (
    <div className={style.showcase_banner_container}>
      <Image
        src={showcaseBanner}
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default Showcase;
