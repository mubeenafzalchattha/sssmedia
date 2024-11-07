import React, {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import PricingCard from './PricingCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';

const PRICING_MONTHLY = [
    {
        extraClass:"mb-30",
        priceTitle:"Starter",
        priceText:"Focuses on foundational social media management elements.",
        amount:"$25.00",
        amountTag:"/monthly",
        listOne:"Basic Meta Ads",
        listTwo:"1 Free Photoshoot: 8 Videos & 6 Photos",
        listThree:"Reviews",
        listFour:"Stories",
        listFive:"Customer Management",
    },
    {
        extraClass:"mb-30",
        priceTitle:"Pro",
        priceText:"Adds more advanced features and enhanced media.",
        amount:"$35.00",
        amountTag:"/monthly",
        listOne:"Everything in Starter Package",
        listTwo:"Enhanced Photoshoot: 10 Videos & 8 Photos",
        listThree:"Google Ads",
    },
    {
        extraClass:" ",
        priceTitle:"Elite",
        priceText:"Offers the most comprehensive service with influencer management and premium media.",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"Everything in Pro Package",
        listTwo:"Influencer Management",
        listThree:"Premium Photoshoot: 13 Videos & 10 Photos",
    },
    {
        extraClass:" ",
        priceTitle:"Boost & Shine",
        priceText:"Social media boosting",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"3-Month Duration",
        listTwo:"Professional Photoshoot",
        listThree:"Social Media Boosting",
        listFour:"Influencer Management",
        listFive:"Organic & Paid Reach Strategies",
    },
    {
        extraClass:" ",
        priceTitle:"Essential SEO",
        priceText:"SEO",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"Keyword Research",
        listTwo:"On-Page Optimization",
        listThree:"Technical SEO",
        listFour:"Backlink Building",
        listFive:"Monthly Reporting",
    },
    {
        extraClass:" ",
        priceTitle:"Visual Impact",
        priceText:"Photography",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"Brand Shoot",
        listTwo:"Coverage of All Types of Products or Services",
        listThree:"3 Videos",
        listFour:"10 Photos per Product",
    },
    {
        extraClass:" ",
        priceTitle:"E-Com Visuals",
        priceText:"E-commerce Photography",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"Product Photoshoot",
        listTwo:"Platform-Specific Requirements for Amazon, Noon, Shopify, etc.",
        listThree:"3 Videos",
        listFour:"5 Photos per Product",
    },
    {
        extraClass:" ",
        priceTitle:"E-Com Success",
        priceText:"E-commerce Management",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"Product Hunting",
        listTwo:"Product Sourcing",
        listThree:"Supplier Management",
        listFour:"Branding",
        listFive:"Advertisement",
    },
    {
        extraClass:" ",
        priceTitle:"Executive Presence",
        priceText:"Personal Branding & Promotion",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:" Personal Branding Strategy",
        listTwo:"Social Media Management",
        listThree:"Podcast Shoot",
        listFour:"LinkedIn Management",
        listFive:"Content Creation and Management",
    },
    {
        extraClass:" ",
        priceTitle:"Creative Vision",
        priceText:"Content Creation",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:" Personal Branding Strategy",
        listTwo:" Custom Content Creation Tailored to Brand or Business",
        listThree:"Storyline Development",
        listFour:"Script Writing",
        listFive:"Content Creation and Management",
    },
    {
        extraClass:" ",
        priceTitle:"UI/UX Design",
        priceText:"Comprehensive UI/UX Design",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"Web UI/UX Design",
        listTwo:"Mobile App UI/UX Design",
        listThree:"Wireframing & Prototyping",
        listFour:"Usability Testing",
    },
    {
        extraClass:" ",
        priceTitle:"Web Design",
        priceText:"Essential Web Design",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"Custom Web Design",
        listTwo:"Responsive Design",
        listThree:"UI/UX Design",
        listFour:"Homepage Design",
        listFive:"Basic SEO Setup",
    },
    {
        extraClass:" ",
        priceTitle:"Ads and Social Media",
        priceText:"Essential Ads & Social Media Design",
        amount:"$60.00",
        amountTag:"/monthly",
        listOne:"Custom Ad Design",
        listTwo:"Social Media Visuals",
        listThree:"Branded Templates",
    },

  ];


const PRICING_YEARLY = [
    {
        extraClass:"mb-30",
        priceTitle:"Professional",
        priceText:"A beautiful, simple website",
        amount:"$125.00",
        amountTag:"/yearly",
        listOne:"10 Pages Responsive Website",
        listTwo:"5 PPC Campaigns",
        listThree:"10 SEO Keywords",
        listFour:"5 Facebook Campaigns",
        listFive:"2 Video Campaigns",
    },
    {
        extraClass:"active mb-30",
        priceTitle:"Standard",
        priceText:"Creative design, premium website",
        amount:"$135.00",
        amountTag:"/yearly",
        listOne:"20 Pages Responsive Website",
        listTwo:"10 PPC Campaigns",
        listThree:"20 SEO Keywords",
        listFour:"10 Facebook Campaigns",
        listFive:"5 Video Campaigns",
    },
    {
        extraClass:" ",
        priceTitle:"Ultimate",
        priceText:"Dynamic website exclusive design",
        amount:"$499.00",
        amountTag:"/yearly",
        listOne:"50 Pages Responsive Website",
        listTwo:"Unlimited Campaigns",
        listThree:"50 SEO Keywords",
        listFour:"100 Facebook Campaigns",
        listFive:"20 Video Campaigns",
    },
  ];

const Pricing = ({extraClass}) => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <section className={`pricing__area fix p-relative pt-120 pb-90 ${extraClass}`}>
                <div className="pricing__shape">
                    <img className="p-shape-1" src="/assets/images/shape/pricing/p-s-1.png" alt=""/>
                    <img className="p-shape-2 d-none d-sm-block" src="/assets/images/shape/pricing/p-s-2.png" alt=""/>
                    <img className="p-shape-3 wow zoomIn" data-wow-delay=".8s" src="/assets/images/shape/pricing/p-s-3.png" alt=""/>
                    <img className="p-shape-4 d-none d-sm-block" src="/assets/images/shape/pricing/p-s-4.png" alt=""/>
                    <img className="p-shape-5" src="/assets/images/shape/pricing/p-s-5.png" alt=""/>
                </div>                
                <Container>
                    <Row>
                        <Col xl={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }} sm={12}>
                            <div className="pricing__title text-center">
                                <SectionTitle subTitle="Pricing Plan"
                                titleFirst="Find the Right Plan"
                                /> 
                            </div>                            
                        </Col>                        
                    </Row>
                    <div className="pricing__tab text-center">  
                        <Row>
                            <Col xl={12}>
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={30}
                                slidesPerView={"auto"}
                                loop={true}
                                breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                }}
                                pagination={{ clickable: true, el: ".swiper-pagination" }}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex+1)} 
                                onInit={(swiper) => setActiveIndex(swiper.realIndex+1)} 
                            >
                                {PRICING_MONTHLY.map(
                                (
                                    { extraClass,priceTitle, priceText,amount,amountTag,
                                        listOne, listTwo,listThree,listFour,listFive}, index
                                    ) => (
                                    <SwiperSlide key={index}>
                                    <PricingCard
                                        extraClass={
                                        index === activeIndex ? `${extraClass} active` : extraClass // Add 'active' class if index matches activeIndex
                                        }
                                        priceTitle={priceTitle}
                                        priceText={priceText}
                                        amount={amount}
                                        amountTag={amountTag}
                                        listOne={listOne}
                                        listTwo={listTwo}
                                        listThree={listThree}
                                        listFour={listFour}
                                        listFive={listFive}
                                    />
                                    </SwiperSlide>
                                )
                                )}
                            </Swiper>
                            <div className="swiper-pagination"></div>
                            </Col>
                        </Row>
                            {/* <Tabs
                                defaultActiveKey="monthly"
                                transition={false}
                                id="noanim-tab-example"
                                className="pricing__nav mb-40"
                                >
                               
                                    <Tab eventKey="monthly" title="Monthly">
                                        <PricingCard
                                                        key={index}
                                                        extraClass={extraClass}
                                                        priceTitle={priceTitle}
                                                        priceText={priceText}
                                                        amount={amount}
                                                        amountTag={amountTag}
                                                        listOne={listOne}
                                                        listTwo={listTwo}
                                                        listThree={listThree}
                                                        listFour={listFour}
                                                        listFive={listFive}
                                                        />
                                    </Tab>
                                    <Tab eventKey="yearly" title="Yearly">
                                        <Row>
                                        {PRICING_YEARLY.map(
                                            ({extraClass, priceTitle, priceText, amount, amountTag, listOne, listTwo, listThree, listFour, listFive}, index) => (
                                                <PricingCard
                                                key={index}
                                                extraClass={extraClass}
                                                priceTitle={priceTitle}
                                                priceText={priceText}
                                                amount={amount}
                                                amountTag={amountTag}
                                                listOne={listOne}
                                                listTwo={listTwo}
                                                listThree={listThree}
                                                listFour={listFour}
                                                listFive={listFive}
                                                />
                                            )
                                        )}
                                        </Row>
                                    </Tab>
                            </Tabs>   */}
                    </div>               
                </Container>
            </section>
    );
};

export default Pricing;