import React from "react";
import style from "./OfferSection.module.css"

const OfferSection = () => {
  return (
    <div className={style.offer_section}>
      <div className="container">
        <h2>Special Offers</h2>

        <div className={style.offer_content_container}>
        <div className={style.offer_content}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus vel reiciendis ea sed architecto.</p>
        </div>
        <div className={style.offer_content}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus vel reiciendis ea sed architecto.</p>
        </div>
        <div className={style.offer_content}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus vel reiciendis ea sed architecto.</p>
        </div>
        <div className={style.offer_content}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus vel reiciendis ea sed architecto.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
