import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';


const SERVICE_DATA = [
    {
      serviceIcon:"/assets/images/icon/s-icon-1.png",
      serviceTitle:"SMM/SEO",
      serviceDesc:"Enhance your online presence with targeted social media management and SEO strategies to drive organic traffic and engagement.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-2.png",
      serviceTitle:"Digital Marketing",
      serviceDesc:"Boost your brand with our comprehensive digital marketing solutions, from strategy to execution, ensuring you stand out online.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-3.png",
      serviceTitle:"Ad Campaigns/Lead Generation",
      serviceDesc:"Increase quality leads and conversions with our data-driven ad campaigns, delivering measurable results and a higher ROI.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-4.png",
      serviceTitle:"Personal Branding/Brand Building",
      serviceDesc:"Build a strong, recognizable identity with our personalized branding services, connecting you with your target audience effectively.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-5.png",
      serviceTitle:"Content Creation",
      serviceDesc:"Engage your audience with high-quality, compelling content. Deliver engaging, high-quality content that resonates with your audience and aligns with your brand's message.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-6.png",
      serviceTitle:"Photography/Videography",
      serviceDesc:"Showcase your brand with stunning photography and videography, creating visuals that tell your brand’s story beautifully.",
      serviceLink:"/services-details"
    },
  ];

const Services = ({extraClass}) => {
    return (
        <section className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}>
                <div className="services__shape">
                    <img className="services-s-1" src="/assets/images/shape/services/services-s-1.png" alt=""/>
                    <img className="services-s-2" src="/assets/images/shape/services/services-s-2.png" alt=""/>
                    <img className="services-s-3" src="/assets/images/shape/services/services-s-3.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-55">
                        <Col xl={6}>
                            <div className="services__title">
                                <SectionTitle subTitle="Services"
                                titleFirst="What we do"/> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                                         
                          {SERVICE_DATA.map(
                              ({serviceIcon, serviceTitle, serviceDesc, serviceLink}, index) => (
                                  <ServiceItem
                                  key={index}
                                  serviceIcon={serviceIcon}
                                  serviceTitle={serviceTitle}
                                  serviceDesc={serviceDesc}
                                  serviceLink={serviceLink}
                                  />
                              )
                          )}                                
                    </Row>
                </Container>
            </section>
    );
};

export default Services;