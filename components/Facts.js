
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';

const Facts = () => {
    return (
        <section className="facts__area fix p-relative pt-120 pb-120 facts__pb">
                <Container>
                    <Row>
                        <Col xxl={6} xl={5} lg={5} md={8} sm={10}>
                            <div className="facts__thumb">
                                <div className="facts__thumb-shape">
                                    <img className="facts-s-1" src="/assets/images/shape/facts/facts-s-1.png" alt=""/>
                                    <img className="facts-s-2" src="/assets/images/shape/facts/facts-s-2.png" alt=""/>
                                    <img className="facts-s-3" src="/assets/images/shape/facts/facts-s-3.png" alt=""/>
                                    <img className="facts-s-4 d-none d-md-block" src="/assets/images/shape/facts/facts-s-4.png" alt=""/>
                                </div>
                                <div className="facts__thumb-image">
                                    <img src="/assets/images/facts/facts-projects.svg" alt=""/>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={6} xl={7} lg={7} md={9}>
                            <div className="facts__content">
                                <div className="facts__content-text">
                                    <SectionTitle subTitle="Facts To Know"
                                    titleFirst="We will help "
                                    titleSecond=" you standout"
                                    />                                    
                                    <p> We empower your brand to cultivate a stellar reputation while reaching the right audience. Partner with us to elevate your name and make a lasting impression</p>
                                </div>
                                <div className="facts__counter-content d-flex">
                                    <div className="facts__counter-text">
                                        {/* <h2>
                                            <CountUp end={2} duration={5} />K
                                        </h2> */}
                                        <h5>Your Custom Content</h5>
                                        <p>Content crafted specially for you.</p>
                                    </div>
                                    <div className="facts__counter-text">
                                        {/* <h2>
                                            <CountUp end={5} duration={5} />M
                                        </h2> */}
                                        <h5>Custom Photoshoot</h5>
                                        <p>We don't just use any photos.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Facts;