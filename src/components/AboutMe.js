import React from "react";
import author from "../me.png";

const AboutMe = () => {
    return (
        <div id="about" className="about-bg bottom-line">

            <div className="container py-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading bold">About Me</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non ipsam soluta quaerat veniam officiis hic corporis provident odit aspernatur nihil laborum, harum voluptates est numquam unde id iusto praesentium!</p>

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
