import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import Modal from "./Modal";

const Experience = ({extraClass}) => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () =>{
        setShowModal(prev=>!prev)
    }
    return (        
        <section className={`experience__area fix p-relative pt-120 pb-120 ${extraClass}`}>  
            <>
                <Modal showModal={showModal} setShowModal={setShowModal}/>
                <div className="experience__shape">
                    <img className="experience-s-1" src="/assets/images/shape/experience/experience-s-1.png" alt=""/>
                    <img className="experience-s-2" src="/assets/images/shape/experience/experience-s-2.png" alt=""/>
                    <img className="experience-s-3 d-none d-lg-block" src="/assets/images/shape/experience/experience-s-3.png" alt=""/>
                    <img className="experience-s-4" src="/assets/images/shape/experience/experience-s-4.png" alt=""/>
                </div>
                <Container>
                    <Row className="align-items-center">
                        <Col xl={5} lg={6} md={9} sm={10}>
                            <div className="experience__content">
                                <SectionTitle subTitle="Your Brand Awareness"
                                titleFirst="Ready to get our" titleSecond="digital services?"/>
                                <p>Empowering brands through tailored social media strategies for amplified online presence and engagement.</p>
                                <Link href="/contact">
                                    <a className="m-btn mt-35">FREE
                                    Social Media Audit</a>
                                </Link>
                            </div> 
                        </Col>
                        <Col xl={7} lg={6} md={9}>
                            <div className="experience__video-btn">                        
                                <span onClick={openModal}><i className="fas fa-play"></i></span>                            
                            </div>
                            <div className="experience__thumb text-end">
                                <img src="/assets/images/experience/experience-image.svg" alt=""/>
                            </div>
                        </Col>                        
                    </Row>
                </Container>
            </>
        </section>
    );
};

export default Experience;