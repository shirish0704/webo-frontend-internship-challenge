import "./NavigationBar.css";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar__items">
          <div className="navbar__brand">
            <a href="/">AR SHAKIR</a>
          </div>
          <button className="hamburger" onClick={toggleNav}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={`navbar__menu ${navOpen ? "open" : ""}`}>
          <div className="navbar__center">
            <div className="navbar__item">
              <a href="#" className="flex gap-2 items-center">
                Product <BsChevronDown className="text-sm stroke-[1.5px]" />
              </a>
            </div>
            <div className="navbar__item">
              <a href="#" className="flex gap-2 items-center">
                Template
                <BsChevronDown className="text-sm stroke-[1.5px]" />
              </a>
            </div>
            <div className="navbar__item">
              <a href="#">Blog</a>
            </div>
            <div className="navba__item">
              <a href="#">Pricing</a>
            </div>
          </div>
          <div className="navbar__right">
            <button className="navbar__right--button1">Sign In</button>
            <button className="navbar__right--button2">Start Free</button>
          </div>
        </div>
        <div className="navbar__right max-[768px]:hidden">
          <button className="navbar__right--button1">Sign In</button>
          <button className="navbar__right--button2">Start Free</button>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
