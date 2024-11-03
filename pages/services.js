import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import Maxdi from "../components/Maxdi";
import Faq from "../components/Faq";
import Pricing from "../components/Pricing";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const ServicesPage = () => {
    return (
        <Layout pageTitle="SSS | Media">
            <PageHeader title="Services" crumbTitle="Services"/>
            <Header heroLogo="/assets/images/logo/sss-media-logo.png"
            headerClass="header__white"
            menuClass="main-menu-3"
            />      
            <main>    
                <Services/>   
                <Maxdi/>   
                <Faq/>   
                <Pricing extraClass="mt-60 mb-260"/>   
                <LetsWork/>
            </main> 
            <Footer/>     
        </Layout>
    );
};

export default ServicesPage;