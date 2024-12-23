import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import BlogDetails from "../components/BlogDetails";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const SingleBlog = () => {
    return (
        <Layout pageTitle="SSS | Media">
            <PageHeader title="Blog Details" crumbTitle="Blog Details"/>
            <Header heroLogo="/assets/images/logo/sss-media-logo.png"
            headerClass="header__white"
            menuClass="main-menu-3"
            />      
            <main>     
                <BlogDetails/>                 
                <LetsWork/>
            </main> 
            <Footer/>     
        </Layout>
    );
};

export default SingleBlog;