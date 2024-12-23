
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';

const About = ({subTitle, titleFirst, titleSecond}) => {
    return (
        <section className="about__area fix p-relative pt-120 pb-120 about__pb">
            <Container>
                <Row>                        
                    <Col xxl={7} xl={8} lg={10} md={10}>                            
                        <div className="about__title mb-80">
                            <SectionTitle subTitle={subTitle}
                            titleFirst={titleFirst} 
                            titleSecond={titleSecond}/>  
                        </div>
                    </Col>
                </Row>
                <Row>                        
                    <Col xl={6} lg={6}>                            
                        <div className="about__thumb">
                            <div className="about__thumb-shape">
                                <img className="about-s-1 d-none d-lg-block" src="/assets/images/shape/about/about-s-1.png" alt=""/>
                                <img className="about-s-2 d-none d-md-block" src="/assets/images/shape/about/about-s-2.png" alt=""/>
                            </div>
                            <div className="about__thumb-image">
                                <img src="/assets/images/about/about-image.svg" alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col xl={{ span: 5, offset: 1 }} lg={6}>                            
                        <div className="about__content">
                            <p>Reach more audience with influencer Marketing and community management.</p>
                            <ul>
                                <li>UGC</li>
                                <li>Social media marketing</li>
                                <li>Content creation and Custom photoshoot/ Video shoot</li>
                            </ul>
                        </div>
                        <div className="about__counter-bg d-none d-sm-block">
                        <div className="about__counter-content d-flex">
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                        <CountUp end={280} duration={5} />+                                        
                                    </h2>
                                    <p>Project Delivered</p>
                                </div>
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                        <CountUp end={500} duration={5} />+                                        
                                    </h2>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                    <CountUp end={3500} duration={5} />+                                        
                                    </h2>
                                    <p>Total Coffees</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;