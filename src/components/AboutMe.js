import React from "react";
import author from "../me.png";

const AboutMe = () => {
    return (
        <div id="about" className="about-bg bottom-line">

            <div className="container py-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading bold">About Me</h1>

                        <p>Hi! My name is Shayan and I'm a Software Developer from Los Angeles, CA. I have well-rounded experience in Full-Stack Python, Java, and MERN. I have built numerous web applications that range from personal websites to advanced e-commerce web applications. </p>

                    </div>
                    <div className="col-lg-6 center bg-tan col-xm-12">
                        <img className="mt-2  d-block center about-img" src={author} alt="author" />

                    </div>
                </div>


            </div>


        </div>


    )
}

export default AboutMe
