import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5 bold">My Services</h1>

            <div className="">
                <div className="row d-flex justify-content-between space-between">




                    <div class="card mt-4 row card-margin  col-sm">
                        <div class="content">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h1 className="service-header">Web Design</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, necessitatibus?</p>
                        </div>
                    </div>


                    <div class="card mt-4 row card-margin col-sm">
                        <div class="content">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h1 className="service-header">Web Development</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, necessitatibus?</p>
                        </div>
                    </div>




                    <div class="card mt-4 row  col-sm">

                        <div class="content">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
                            <h1 className="service-header">Google ads and SEO</h1>
                            <p>Your website will appear at the top of Google searches</p>
                        </div>


                    </div>
                </div>
            </div>











        </div >




    )
}

export default Services
