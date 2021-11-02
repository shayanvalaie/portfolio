import React from 'react'
import netflix from "../netflix.png";
import hustlestriking from "../hs.png";
import shayanvalaie from "../sv.png";


const Portfolio = () => {
    return (

        <div id="portfolio" className="bg-tan-p pb-p">
            <h1 className="text-center text-uppercase py-5 bold">Portfolio</h1>


            <div className="container pb-2">


                <div className="row">
                    <div className="p-card mt-4 card-margin col-sm">
                        <img src={netflix} alt="" />
                        <div className="info text-center">


                            <div className="d-flex justify-content-between">


                                <a target="_blank" href="https://netflix-clone-9d54e.web.app"><button className=" p-button btn btn-outline-dark">Official Site</button></a>
                            </div>
                        </div>
                    </div>

                    {/* --------- */}

                    <div className="p-card card-margin mt-4 col-sm">
                        <img src={shayanvalaie} alt="" />
                        <div className="info info-bg text-center">


                            <div className="d-flex justify-content-between">


                                <a target="_blank" href="http://shayanvalaie.com"><button className="p-button btn btn-outline-dark">Official Site</button></a>
                            </div>
                        </div>
                    </div>

                    {/* --------- */}

                    <div className="p-card mt-4 bg-black col-sm">
                        <img src={hustlestriking} alt="" />
                        <div className="info">




                            <div className="d-flex justify-space-between">



                                <a target="_blank" href="http://hustlestriking.com/"><button className="p-button btn btn-outline-dark">Official Site</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >


    )
}

export default Portfolio
