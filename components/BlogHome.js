import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import BlogHomeCard from './BlogHomeCard';





const BlogHome = ({extraClass}) => {
    return (
        <section className={`blog__area fix p-relative ${extraClass} pb-225`}>
                <div className="blog__shape">
                    <img className="blog-shape-1" src="assets/images/shape/blog/blog-s-1.png" alt=""/>
                    <img className="blog-shape-2" src="assets/images/shape/blog/blog-s-2.png" alt=""/>
                    <img className="blog-shape-3 d-none d-sm-block" src="assets/images/shape/blog/blog-s-3.png" alt=""/>
                    <img className="blog-shape-4" src="assets/images/shape/blog/blog-s-4.png" alt=""/>
                    <img className="blog-shape-5 d-none d-sm-block" src="assets/images/shape/blog/blog-s-5.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-65">
                        <Col xl={12}>
                            <div className="blog__title text-center">
                                <SectionTitle subTitle="Our Blog"
                                titleFirst="Our latest updates"
                                /> 
                                <p>High turnaround rate and loop back vec but we want to empower the team with the right tools and guidance.</p> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                        
                        {BLOG_DATA.map(
                            ({blogLink, blogImg, blogDate, blogCat, catLink, blogTitle}, index) => (
                                <BlogHomeCard
                                key={index}
                                blogLink={blogLink}
                                blogImg={blogImg}
                                blogDate={blogDate}
                                blogCat={blogCat}
                                catLink={catLink}
                                blogTitle={blogTitle}
                                />
                            )
                        )}                              
                    </Row>
                </Container>
            </section>
    );
};

export default BlogHome;

const BLOG_DATA = [
    {
      blogImg:"/assets/images/blog/blog-img-1.jpg",
      blogLink:"/single-blog",
      blogDate:"22 Aug, 2024",
      blogCat:"Marketing",
      catLink:"/blog",
      blogTitle:"The Power of Social Media Management: Building Your Brand’s Presence"
    },
    {
      blogImg:"/assets/images/blog/blog-img-2.jpg",
      blogLink:"/single-blog",
      blogDate:"18 Sep, 2024",
      blogCat:"Marketing",
      catLink:"/blog",
      blogTitle:"Harnessing the Power of Content Creation for Brand Success"
    },
    {
      blogImg:"/assets/images/blog/blog-img-3.jpg",
      blogLink:"/single-blog",
      blogDate:"6 Oct, 2024",
      blogCat:"Marketing",
      catLink:"/blog",
      blogTitle:"Maximizing ROI with Effective Social Media Marketing Strategies"
    },
    
  ];

// const BlogsData = [
//     {
//         Title: 'The Power of Social Media Management: Building Your Brand’s Presence',
//         Category: 'Marketing',
//         ShortText: 'In today’s digital age, having a strong social media presence is no longer optional; it’s a necessity.',
//         DescriptionText: `In today’s digital age, having a strong social media presence is no longer optional; it’s a necessity. At Creative Dots Media Agency, we specialize in social media management, ensuring that your brand  not only survives but thrives in the competitive online landscape.
//         <br /> <br />
//         <h4> The Importance of Social Media Management </h4>
//         Social media platforms are where your customers are. They are the modern-day marketplaces where people discover, engage with, and form opinions about brands. Effective social media management ensures your brand is consistently present, relevant, and engaging. It involves:
//         <br /><br />
//         1. <strong> Content Scheduling and Posting:</strong> Timely and consistent posting keeps your audience engaged.<br />
//         2. <strong>Engagement and Interaction:</strong> Prompt responses and active engagement foster a loyal community.<br />
//         3. <strong>Analytics and Insights:</strong> Understanding what works and what doesn’t through data.<br />
//         <br /> <br />
//         Building Your Brand’s Online Presence
//         At Creative Dots Media Agency, we take a strategic approach to social media management. Our process includes:
//         <br /> 
//         1. <strong>Understanding Your Audience:</strong> We delve deep into audience demographics, preferences, and behaviors.<br />
//         2. <strong>Creating Compelling Content:</strong> Tailored content that resonates with your audience and aligns with your brand voice.<br />
//         3. <strong>Monitoring and Optimization:</strong> Continuously refining strategies based on performance metrics.<br />
//         Effective social media management is key to building and maintaining a strong brand presence online. Let Creative Dots Media Agency help you navigate this crucial aspect of modern marketing.
//         `,
//         ImgSrc: BlogImg1,
//     },
//     {
//         Title: 'Harnessing the Power of Content Creation for Brand Success',
//         Category: 'Marketing',
//         ShortText: 'Content is king in the digital marketing world. It’s the vehicle through which your brand’s voice is heard and its story is told.',
//         DescriptionText: `Content is king in the digital marketing world. It’s the vehicle through which your brand’s voice is heard and its story is told. At Creative Dots Media Agency, we understand the pivotal role content creation plays in connecting with your audience and driving business growth.
//         <br /><br />
//         <h4> Why Content Creation Matters </h4>
//         Quality content serves multiple purposes:
//         <br /><br />
//         1. <strong>Engagement:</strong> Engaging content keeps your audience coming back for more.<br />
//         2. <strong>SEO:</strong> Well-crafted content improves your search engine rankings.<br />
//         3. <strong>Brand Authority:</strong> Expert content establishes your brand as an authority in your industry.<br /><br />
        
//         <h4> Our Content Creation Process </h4>
//         At Creative Dots Media Agency, we believe in a strategic approach to content creation:<br /><br />
        
//         1. <strong>Research and Planning:</strong> Understanding industry trends and audience interests.<br />
//         2. <strong>Creative Development:</strong> Crafting unique and engaging content tailored to your brand.<br />
//         3. <strong>Distribution:</strong> Ensuring your content reaches the right audience through the right channels.<br /><br />
        
//         <h4> A Success Story </h4>
//         One of our clients, a Dog trainer brand, saw a 150% increase in social media engagement and a 200% boost in website traffic after we implemented a targeted content creation strategy. By focusing on visually appealing content and informative blog posts, we helped them build a loyal online community. Conclusion
//         Great content is the backbone of effective digital marketing. Partner with Creative Dots Media Agency to create compelling content that resonates with your audience and drives your brand forward.`,
//         ImgSrc: BlogImg2,
//     },
//     {
//         Title: 'Maximizing ROI with Effective Social Media Marketing Strategies',
//         Category: 'Marketing',
//         ShortText: 'Social media marketing is an essential component of any comprehensive marketing strategy.',
//         DescriptionText: `Social media marketing is an essential component of any comprehensive marketing strategy. At Creative Dots Media Agency, we specialize in creating and executing social media marketing campaigns that deliver measurable results and maximize ROI.
//         <br /><br />
//         <h4> The Role of Social Media Marketing </h4>
//        Social media marketing is about more than just promoting your products or services; it’s about building relationships, fostering engagement, and driving conversions. Here’s how we do it:
//        <br /><br />
//        1. <strong>Targeted Advertising:</strong> Using advanced targeting options to reach your ideal audience.<br />
//        2. <strong>Creative Campaigns:</strong> Crafting innovative campaigns that capture attention and inspire action.<br />
//        3. <strong>Performance Tracking:</strong> Continuously monitoring and optimizing campaigns for maximum effectiveness.<br /><br />
       
//        <h4>Our Approach to Social Media Marketing </h4>
//        Our team at Creative Dots Media Agency follows a proven approach to social media marketing:
//        <br /><br />
//        1. <strong>Strategy Development:</strong> Creating a comprehensive strategy tailored to your business goals.<br />
//        2. <strong>Content Creation:</strong> Developing high-quality, engaging content that aligns with your strategy.<br />
//        3. <strong>Ad Management:</strong> Managing and optimizing ad campaigns to ensure the best possible outcomes.<br /><br />
       
//        <h4> Real-World Results </h4>
//        A recent campaign we ran for a tech startup resulted in a 300% increase in lead generation and a significant boost in brand awareness. By leveraging targeted ads and engaging content, we helped them reach a wider audience and achieve their marketing goals.
//        Effective social media marketing is key to achieving your business objectives. Let Creative Dots Media Agency help you create and execute strategies that deliver real results and maximize your return on investment.
//         `,
//         ImgSrc: BlogImg3,
//     },
// ];