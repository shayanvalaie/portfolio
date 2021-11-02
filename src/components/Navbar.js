import React from "react"
import logo from "../pLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (


    <nav id="home" className="navbar navbar-transparent navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">



        <Link to="home" className="navbar-brand logo" href="#"><img className="logo" src={logo} alt="logo" /></Link>
        <button className="navbar-toggler no-border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#171717" }} />
        </button>
      </div>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav navBarFormat mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" target="_blank" href="https://github.com/shayanvalaie">GitHub</a>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}

              duration={200} className="nav-link ">about</Link>
          </li>
          <li className="nav-item">
            <Link
              to="services"
              spy={true}
              smooth={true}

              duration={200} className="nav-link "
            >services</Link>
          </li>

          <li className="nav-item">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}

              duration={200} className="nav-link ">portfolio</Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}

              duration={200} className="nav-link">contact</Link>
          </li>

        </ul>

      </div>

    </nav>


  )
}



export default Navbar
