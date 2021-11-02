import React from "react"
import Typed from "react-typed";
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1 className="bold">Web Development and web design</h1>
                <Typed
                    className="typed-text"
                    strings={["Hi, My Name is Shayan.", "Welcome to my Portfolio."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link to="contact"
                    spy={true}
                    smooth={true}

                    duration={200} className=""><button type="button" class="btn mt-3 btn-outline-dark">CONTACT ME</button></Link>
            </div>
        </div>
    )
}

export default Header

