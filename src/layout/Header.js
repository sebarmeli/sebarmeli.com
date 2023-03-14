import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import { faChalkboard, faBuilding, faPersonChalkboard, faPen, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    activeSection();
  }, []);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/" className="logo-text">
              Sebastiano
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)} >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <Link href="/">
                  <Image width="120" height="120" src="/static/img/about-me.jpg" title="eb's profile pic" alt="Seb's phot" />
                </Link>
              </div>
              <h5>Sebastiano Armeli</h5>
            </div>
          </div>
          <ul className="nav nav-menu" id="pp-menu">
          <li data-menuanchor="home" className="active">
            <a className="nav-link" href="#home">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </li>
          <li data-menuanchor="about">
            <a className="nav-link" href="#about">
              <i className="ti-id-badge" />
              <span>About Me</span>
            </a>
          </li>
          <li data-menuanchor="mentoring">
            <a className="nav-link" href="#mentoring">
              <FontAwesomeIcon icon={faChalkboard} />
              <span>Mentoring</span>
            </a>
          </li>
          <li data-menuanchor="writing" className="blog">
            <a className="nav-link" href="#writing">
            <FontAwesomeIcon icon={faPen} />
              <span>Writing</span>
            </a>
          </li>
          <li data-menuanchor="speaking">
            <a className="nav-link" href="#speaking">
              <FontAwesomeIcon icon={faPersonChalkboard} />
              <span>Speaking</span>
            </a>
          </li>
          <li data-menuanchor="startups">
            <a className="nav-link" href="#startups">
              <FontAwesomeIcon icon={faBuilding} />
              <span>Startups</span>
            </a>
          </li>
          <li data-menuanchor="contact">
            <a className="nav-link" href="#contact">
              <FontAwesomeIcon icon={faAddressBook} />
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="https://twitter.com/sebarmeli">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.linkedin.com/in/sebastianoarmeli/">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;