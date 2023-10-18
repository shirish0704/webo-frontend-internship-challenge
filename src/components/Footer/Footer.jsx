import React from "react";
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoMessenger } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { SiTwoo } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="footer">
        <div className="footer__content">
          <div className="footer__content--shakir">
            <h1 className="shakir__heading">
              <a href="/">AR Shakir</a>
            </h1>
            <p className="shakir__para">
              Finance helps companies manage payments easily.
            </p>
            <div className="shakir__icons">
              <FaLinkedinIn className="fill-[#3734A9] text-2xl" />
              <BiLogoMessenger className="fill-[#3734A9] text-2xl" />
              <BsTwitter className="fill-[#3734A9] text-2xl" />
              <SiTwoo className="fill-[#3734A9] text-2xl" />
            </div>
          </div>

          <div className="footer__content--company">
            <h1 className="footer__heading">Company</h1>
            <div className="footer__menu">
              <h4 className="footer__company--list">About Us</h4>
              <h4 className="footer__company--list">Careers</h4>
              <h4 className="footer__company--list">Blog</h4>
              <h4 className="footer__company--list">Pricing</h4>
            </div>
          </div>
          <div className="footer__content--resources">
            <h1 className="footer__heading">Resources</h1>
            <div className="footer__menu">
              <h4 className="footer__resources--list">Proposal Template</h4>
              <h4 className="footer__resources--list">Invoice Template</h4>
              <h4 className="footer__resources--list">Tuturoial</h4>
              <h4 className="footer__resources--list">
                How to write a contract
              </h4>
            </div>
          </div>
          <div className="footer__content--newsletter">
            <h1 className="footer__heading">Join Our Newsletter</h1>
            <div className="footer__review">
              <input
                type="email"
                placeholder="Your Email Address"
                className="review--input"
              />
              <button className="review--button">Subscribe</button>
            </div>
            <p className="review--para">
              * Will send you weekly updates for your better finance management.
            </p>
          </div>
        </div>
        <div className="footer__line h-[2px] bg-[#E5E5EA]"></div>
        <div className="footer__copyright">
          <p className="footer__copyright--para">
            Copyright &copy; {year} AR Shakir. All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
