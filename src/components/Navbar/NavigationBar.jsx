import { Navbar } from "flowbite-react";
import "./NavigationBar.css";
import { BsChevronDown } from "react-icons/bs";

const NavigationBar = () => {
  return (
    <>
      <nav className="navbar">
        <Navbar fluid className=" bg-transparent p-0">
          <div className="navbar__logo flex items-center">
            <Navbar.Brand href="https://flowbite-react.com">
              <span className="self-center whitespace-nowrap text-[20px] font-[700]">
                AR SHAKIR
              </span>
            </Navbar.Brand>
          </div>
          <div className="flex md:order-2">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <div className="navbar__list">
              <div className="navbar__list--menu flex gap-[39px]">
                <Navbar.Link
                  className="text-black flex items-center gap-[12px]"
                  href="#"
                >
                  Product <BsChevronDown />
                </Navbar.Link>
                <Navbar.Link
                  className="text-black flex items-center gap-[12px]"
                  href="#"
                >
                  Template <BsChevronDown />
                </Navbar.Link>
                <Navbar.Link className="text-black" href="#">
                  Blog
                </Navbar.Link>
                <Navbar.Link className="text-black" href="#">
                  Pricing
                </Navbar.Link>
              </div>
              <div className="navbar__button">
                <button className="navbar__button--sign">Sign In</button>
                <button className="navbar__button--start">Start Free</button>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  );
};

export default NavigationBar;
