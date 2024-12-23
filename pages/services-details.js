import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import ServicesDetails from "../components/ServicesDetails";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const ServicesDetailsPage = () => {
    return (
        <Layout pageTitle="SSS | Media">
            <PageHeader title="Services Details" crumbTitle="Services Details"/>
            <Header heroLogo="/assets/images/logo/sss-media-logo.png"
            headerClass="header__white"
            menuClass="main-menu-3"
            />      
            <main>    
                <ServicesDetails/>      
                <LetsWork/>
            </main> 
            <Footer/>     
        </Layout>
    );
};

export default ServicesDetailsPage;