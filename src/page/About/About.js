import React from 'react';
import { Link } from 'react-router-dom';


const About = (props) => {
    return (
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-lg-6 text-capitalize  d-flex justify-content-between"> 
                            <h2 className="fs-4">{props.title}</h2>
                        </div>
                    </div>
                    
                    <div className="row ">
                        <div className="col-lg-6 text-capitalize shadow-sm p-3  bg-white"> 
                            <p className="text-muted fs-6 fw-light font-monospace red"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et vestibulum magna. Curabitur iaculis lorem nec
                            massa viverra hendrerit. Quisque condimentum orci a neque semper ultrices. Duis fringilla, ipsum sit amet hendrerit
                            finibus, nisi libero lobortis mauris, eu venenatis libero turpis a diam. Aliquam erat volutpat. Nullam vel
                            ullamcorper dui, eget dapibus lacus. Donec nec metus neque. Orci varius natoque penatibus et magnis dis parturient 
                            montes, nascetur ridiculus mus. Praesent ut augue at dolor varius vestibulum. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. In molestie, diam sit amet viverra laoreet.
                            
                            </p>
                            <Link to="/" className="btn btn-dark btn-sm" >back home</Link>
                        </div>
                    </div>
                </div>
        
    );
};

export default About;