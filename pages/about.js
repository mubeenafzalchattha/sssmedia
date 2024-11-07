import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import Experience from "../components/Experience";
import TeamHome from "../components/TeamHome";
import Project from "../components/Project";
import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const AboutPage = () => {
    return (
        <Layout pageTitle="SSS | Media">
            <PageHeader title="About us" crumbTitle="About us"/>
            <Header heroLogo="/assets/images/logo/sss-media-logo.png"
            headerClass="header__white"
            menuClass="main-menu-3"
            />      
            <main>
                <About subTitle="We are SSS | Media"
                titleFirst="We are here to make your"
                titleSecond="product look more elegant and stylish"
                />     
                <Experience extraClass="mt-70"/>         
                {/* <Project extraClass="project__area-pt" subTitle="Get Started"/>        */}
                <Testimonial testimonialArea="testimonials__area" paddingTop="pt-120"/> 
                <TeamHome subTitle="Team Members"/>  
                {/* <BlogHome extraClass="pt-110"/>       */}
                <LetsWork/>
            </main> 
            <Footer/>     
        </Layout>
    );
};

export default AboutPage;