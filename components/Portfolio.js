import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SectionTitle from './SectionTitle';
import PortfolioItem from './PortfolioItem';

const PORTFOLIO_ALL = [
  {
    portfolioImg:"/assets/images/portfolio/portfolio1.png",
    portfolioCat:"UI/UX Design",
    portfolioTitle:"Custom Photoshoot",
    portfolioLink:"/single-portfolio",
  },
  {
    portfolioImg:"/assets/images/portfolio/portfolio2.png",
    portfolioCat:"Marketing",
    portfolioTitle:"Creative Ideas",
    portfolioLink:"/single-portfolio",
  },
  {
    portfolioImg:"/assets/images/portfolio/portfolio3.png",
    portfolioCat:"Development",
    portfolioTitle:"Innovative Content",
    portfolioLink:"/single-portfolio",
  },
  {
    portfolioImg:"/assets/images/portfolio/portfolio4.png",
    portfolioCat:"Content Writing",
    portfolioTitle:"Right Audience",
    portfolioLink:"/single-portfolio",
  },
  {
    portfolioImg:"/assets/images/portfolio/portfolio5.png",
    portfolioCat:"Social Ad",
    portfolioTitle:"Custom Photoshoot",
    portfolioLink:"/single-portfolio",
  },
  {
    portfolioImg:"/assets/images/portfolio/portfolio6.png",
    portfolioCat:"App Design",
    portfolioTitle:"Creative Ideas",
    portfolioLink:"/single-portfolio",
  },
];


const PORTFOLIO_UI = [
    {
      portfolioImg:"/assets/images/portfolio/portfolio1.png",
      portfolioCat:"Marketing",
      portfolioTitle:"Marketing Agency",
      portfolioLink:"/single-portfolio",
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio2.png",
      portfolioCat:"Content Writing",
      portfolioTitle:"Digital Agency",
      portfolioLink:"/single-portfolio",
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio3.png",
      portfolioCat:"App Design",
      portfolioTitle:"Creative Agency",
      portfolioLink:"/single-portfolio",
    },
  ];


  const PORTFOLIO_MARKETING = [
    {
      portfolioImg:"/assets/images/portfolio/portfolio4.png",
      portfolioCat:"UI/UX Design",
      portfolioTitle:"Digital Agency",
      portfolioLink:"/single-portfolio",
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio5.png",
      portfolioCat:"Development",
      portfolioTitle:"Creative Agency",
      portfolioLink:"/single-portfolio",
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio6.png",
      portfolioCat:"Social Ad",
      portfolioTitle:"Marketing Agency",
      portfolioLink:"/single-portfolio",
    },    
  ];

  const PORTFOLIO_DEVELOPMENT = [    
    {
      portfolioImg:"/assets/images/portfolio/portfolio5.png",
      portfolioCat:"Marketing",
      portfolioTitle:"Marketing Agency",
      portfolioLink:"/single-portfolio",
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio1.png",
      portfolioCat:"Content Writing",
      portfolioTitle:"Digital Agency",
      portfolioLink:"/single-portfolio",
    },    
    {
      portfolioImg:"/assets/images/portfolio/portfolio3.png",
      portfolioCat:"Development",
      portfolioTitle:"Creative Agency",
      portfolioLink:"/single-portfolio",
    },
  ];

  const PORTFOLIO_CONTENT = [
    {
      portfolioImg:"/assets/images/portfolio/portfolio3.png",
      portfolioCat:"App Design",
      portfolioTitle:"Creative Agency",
      portfolioLink:"/single-portfolio",
    },
    {
      portfolioImg:"/assets/images/portfolio/portfolio1.png",
      portfolioCat:"UI/UX Design",
      portfolioTitle:"Digital Agency",
      portfolioLink:"/single-portfolio",
    },   
    {
      portfolioImg:"/assets/images/portfolio/portfolio2.png",
      portfolioCat:"Social Ad",
      portfolioTitle:"Marketing Agency",
      portfolioLink:"/single-portfolio",
    },
  
  ];

const Services = () => {
    return (

            <section className="portfolio__area fix p-relative pb-90">
                <div className="portfolio__shape">
                    <img className="portfolio-s-1" src="/assets/images/shape/portfolio/portfolio-s-1.png" alt=""/>
                    <img className="portfolio-s-2" src="/assets/images/shape/portfolio/portfolio-s-2.png" alt=""/>
                    <img className="portfolio-s-3 d-none d-sm-block" src="/assets/images/shape/portfolio/portfolio-s-3.png" alt=""/>
                    <img className="portfolio-s-4" src="/assets/images/shape/portfolio/portfolio-s-4.png" alt=""/>
                </div>
                <Container>
                    <Row>
                        <Col xl={9}>
                            <div className="portfolio__wrapper">
                                <div className="portfolio__content">
                                    <div className="portfolio__title">
                                        <SectionTitle subTitle="Portfolio"
                                        titleFirst="Some of our amazing works"/> 
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="portfolio">
                        <Tabs
                        defaultActiveKey="all"
                        transition={false}
                        id="noanim-tab-example"
                        className="portfolio__menu"
                        >
                          <Tab eventKey="all" title="Clients">
                            <Row className="mt-150">
                            {PORTFOLIO_ALL.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          {/* <Tab eventKey="ui" title="UI/UX Design">
                            <Row className="mt-150">
                            {PORTFOLIO_UI.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="marketing" title="Marketing">
                            <Row className="mt-150">
                            {PORTFOLIO_MARKETING.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="development" title="Development">
                            <Row className="mt-150">
                            {PORTFOLIO_DEVELOPMENT.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="content" title="Content Writing">
                            <Row className="mt-150">
                            {PORTFOLIO_CONTENT.map(
                                ({portfolioImg, portfolioCat, portfolioTitle, portfolioLink}, index) => (
                                  <PortfolioItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioCat={portfolioCat}
                                  portfolioTitle={portfolioTitle}
                                  portfolioLink={portfolioLink}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab> */}
                      </Tabs>  
                    </div>
                </Container>      
            </section>                               
                                                          
                   
    );
};

export default Services;