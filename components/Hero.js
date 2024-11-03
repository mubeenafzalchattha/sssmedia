import React from 'react';
import { Container, Row, Col } from "react-bootstrap";


const Hero = () => {
    const whatsappUrl = `https://wa.me/${'+971502794425'}?text=${encodeURIComponent('Hey, can you audit my social media?')}`;
    return (
        <section className="hero__area hero__height fix p-relative d-flex align-items-center">
            <div className="hero__shape">
                <img className="hero-shape-1" src="/assets/images/shape/hero/hero-shape-1.png" alt=""/>
                <img className="hero-shape-2 d-none d-md-block" src="/assets/images/shape/hero/hero-shape-2.png" alt=""/>
                <img className="hero-shape-3" src="/assets/images/shape/hero/hero-shape-3.png" alt=""/>
                <img className="hero-shape-4 d-none d-sm-block" src="/assets/images/shape/hero/hero-shape-4.png" alt=""/>
                <img className="hero-shape-5 d-none d-sm-block" src="/assets/images/shape/hero/hero-shape-5.png" alt=""/>
                <img className="hero-shape-6 d-none d-xl-block" src="/assets/images/shape/hero/hero-shape-6.png" alt=""/>
                <img className="hero-shape-7 d-none d-sm-block" src="/assets/images/shape/hero/hero-shape-7.png" alt=""/>
            </div>
            <Container>
                <Row className="align-items-center">
                    <Col xxl={6} xl={6} lg={7} md={7} sm={10}>
                        <div className="hero__content-shape">
                            <img className="hero-c-shape-1" src="/assets/images/shape/hero/hero-c-shape-1.png" alt=""/>
                        </div>
                        <div className="hero__content">
                            <h4 className="section__sub-title">
                                Creative Digital Agency
                            </h4>
                            {/* <h2 className="hero__title">
                                <span>We build your brands</span>
                                online presence
                            </h2>   */}
                            <h2 className="hero__title">
                                <span>Connect With</span>
                                Right Audience
                            </h2>  
                            {/* <p>The carbon in our apple pies extraordinary claims require extraord evidence permanence of the stars energy.</p>  */}  
                            <p> Build A Brand and Increase Sales Through UGC, Social Media, and Digital Marketing. </p>                           
                            {/* <Link > */}
                                <a href={whatsappUrl} className="m-btn mt-35">Book free consultation</a>
                            {/* </Link> */}
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={5} md={5} sm={7}>
                        <div className="hero__thumb text-end">
                            <div className="hero__thumb-shape">
                                <img className="hero-t-shape-1 d-none d-xl-block" src="/assets/images/shape/hero/hero-t-shape-1.png" alt=""/>
                                <img className="hero-t-shape-2" src="/assets/images/shape/hero/hero-t-shape-2.png" alt=""/>
                                <img className="hero-t-shape-3" src="/assets/images/shape/hero/hero-t-shape-3.png" alt=""/>
                            </div>
                            <div className="hero__thumb-image">
                                <img src="/assets/images/hero/hero-image.svg" alt=""/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>                              
        </section>
    );
};

export default Hero;