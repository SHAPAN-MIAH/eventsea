"use client";
import React from "react";
import style from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../Assets/Images/event_sea_logo-removebg.png";
import visa from "../../../Assets/Images/icon-footer-visa.0cc68109.svg";
import amex from "../../../Assets/Images/icon-footer-amex.a8ead788.svg";
import mastercard from "../../../Assets/Images/icon-footer-mastercard.afdd5b7f.svg";
import dbbl from "../../../Assets/Images/icon-payment-dbbl.0975a769.svg";
import bkash from "../../../Assets/Images/icon-footer-bkash.a929cde0.svg";
import nagad from "../../../Assets/Images/icon-payment-nagad.2e467251.svg";
import union from "../../../Assets/Images/icon-payment-union.d875933a.svg";
import upay from "../../../Assets/Images/icon-payment-upay.fbd2acc5.svg";
import tap from "../../../Assets/Images/icon-payment-tap.dcf016e9.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer_section}>
      <div className="container">
        <div className={style.footer_content}>
          <div className={style.footer_content_slice}>
            <h6>Discover</h6>
            <div className={style.footer_links_container}>
              <ul className={style.footer_links}>
                <li className={style.footer_link}>
                  <Link href="/" className="active">
                    Home
                  </Link>
                </li>
                <li className={style.footer_link}>
                  <Link href="/terms" className="">
                    Terms
                  </Link>
                </li>
                <li className={style.footer_link}>
                  <Link href="/talent" className="">
                    Talent &amp; Culture
                  </Link>
                </li>
              </ul>
              <ul className={style.footer_links}>
                <li className={style.footer_link}>
                  <Link href="/refund-policy?region=BD" className="">
                    Refund Policy
                  </Link>
                </li>
                <li className={style.footer_link}>
                  <Link href="/emi-policy" className="">
                    EMI Policy
                  </Link>
                </li>
                <li className={style.footer_link}>
                  <Link href="/privacy-policy" className="">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.footer_content_slice}>
            <h6>Payment Methods</h6>
            <ul className={style.payment_methods}>
              <li className={style.payment_image}>
                <Image src={visa} width="60" height="50" />
              </li>
              <li className={style.payment_image}>
                <Image src={amex} width="60" height="50" />
              </li>
              <li className={style.payment_image}>
                <Image src={mastercard} width="60" height="50" />
              </li>
              <li className={style.payment_image}>
                <Image src={dbbl} width="60" height="50" />
              </li>
              <li className={style.payment_image}>
                <Image src={bkash} width="60" height="50" />
              </li>
              <li className={style.payment_image}>
                <Image src={nagad} width="60" height="50" />
              </li>
              <li className={style.payment_image}>
                <Image src={upay} width="60" height="50" />
              </li>
              <li className={style.payment_image}>
                <Image src={union} width="60" height="50" />
              </li>
              <li className={style.payment_image}>
                <Image src={tap} width="60" height="50" />
              </li>
            </ul>
          </div>
          <div className={style.footer_content_slice}>
            <h6>Need Help ?</h6>
            <p className="text-small-regular">
              We are Always here for you! 
              <br />
              Knock us on Messenger anytime or Call
              <br />
              our Hotline (10AM - 10PM).
            </p>
          </div>
          <div className={style.footer_content_slice}>
            <h6>Contact</h6>
            <ul className="footer-contact">
              <li className={style.footer_link}>
                <Link href="mailto:info@gozayaan.com">info@eventsea.com</Link>
              </li>
              <li className={style.footer_link}>
                <Link href="tel:+8809678332211">+88 09678 332211</Link>
              </li>
            </ul>
            <ul className={style.social_icons}>
              <li className={style.social_icon}>
                <Link
                  href="https://www.facebook.com/GoZayaanBD"
                  target="_blank"
                >
                  <FaFacebookF/>
                </Link>
              </li>
              <li className={style.social_icon}>
                <Link
                  href="https://www.youtube.com/channel/UCPcc3SEA1Ig3QMqNaW91-Ng"
                  target="_blank"
                >
                  <FaYoutube/>
                </Link>
              </li>
              <li className={style.social_icon}>
                <Link
                  href="https://www.instagram.com/gozayaan/"
                  target="_blank"
                >
                  <FaInstagram/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.footer_copyright}>
        <div className="container">
          <div className={style.footer_copyright_content}>
            <div>
              <Image className={style.footer_logo} src={logo} width="150" />
              
            </div>
            <div className="copyright_text">
              <p className="text-small-regular">© Copyright EventSea Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
