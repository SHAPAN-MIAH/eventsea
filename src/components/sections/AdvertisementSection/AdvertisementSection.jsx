import React from "react";
import adImg from "../../../Assets/Images/Weddings-Catering-Events-Planner-Corporate-Social-Event-House-Kenya.jpg";
import Image from "next/image";
import style from "./AdvertisementSection.module.css";
import Button from "@/components/elements/Buttons/Button";

const AdvertisementSection = () => {
  return (
    <div className={style.advertisement_section}>
      <div className="container">
        <div className={style.advertisement_container}>
          <div className={style.advertisement_content}>
            <div>
              <h2>Ready for your 2023 Events?</h2>

              <div className={style.event_list}>
                <ul>
                  <li>Conferences and meetings</li>
                  <li>Trade shows</li>
                  <li>Incentive travel</li>
                  <li>Employee appreciation and team building</li>
                  <li>Family tour</li>
                  <li>Hybrid events</li>
                </ul>
              </div>
            </div>
            <div className={style.lets_booking_btn}>
              <div>
                <h2>Lets Booking Your Events</h2>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementSection;
