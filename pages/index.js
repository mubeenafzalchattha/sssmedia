import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Facts from "../components/Facts";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const HomeOne = () => {
  return (
    <Layout pageTitle="SSS | Media">
      <Header heroLogo="/assets/images/logo/sss-media-logo.png"
      />      
      <main>
        <Hero/>      
        <About subTitle="About Us"
        titleFirst="Rewamp your brand"
        titleSecond=""
        />   
        <Services extraClass="mt-75"/>      
        <Facts/>      
        <Portfolio/>      
        <Experience/>      
        <Testimonial testimonialArea="testimonials__area" paddingTop="pt-120"/>      
        <Faq/>      
        {/* <BlogHome extraClass="pt-60"/>       */}
        <LetsWork/>
      </main> 
      <Footer/>     
    </Layout>
  );
};

export default HomeOne;
