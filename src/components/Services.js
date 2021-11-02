import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5 bold">My Services</h1>

            <div className="container">
                <div className="row ">




                    <div class="card col-sm card-margin ">
                        <div class="content ">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h1 className="service-header">Web Design</h1>

                        </div>
                    </div>


                    <div class="card card-margin col-sm">
                        <div class="content">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h1 className="service-header">Web Development</h1>

                        </div>
                    </div>




                    <div class="card   col-sm">

                        <div class="content">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
                            <h1 className="service-header">Google ads and SEO</h1>

                        </div>


                    </div>
                </div>
            </div>











        </div >




    )
}

export default Services
