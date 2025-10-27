import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog1 = () => {
    return (
        <section className="agk-blog pt-130 pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-50 text-lg-start text-center pf_fadeup">
                            <span className="sub-title">Latest Insights</span>
                            <h2>Stay Ahead with the Future of AI-Powered QA</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="agk-button float-lg-end mb-60 text-lg-end text-center pf_fadeup">
                            <Link href="#" className="theme-btn style-one">
                                <span className="text-flip">
                                    <span className="text">View All Articles</span>
                                    <span className="text">View All Articles</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Blog 1 */}
                    <div className="col-xl-6">
                        <div className="Agenko-blog-item style-two mb-40 pf_fadeup">
                            <div className="post-thumbnail">
                                <Image 
                                    src="/assets/images/pages/new-images/AI-blogs.jpeg" 
                                    alt="AI QA Automation" 
                                    width={260} 
                                    height={260}  
                                    style={{objectFit:"cover"}} 
                                />
                            </div>
                            <div className="post-content">
                                <div className="post-categories">
                                    <a href="#">Recent Blogs</a>
                                </div>
                                <h4 className="title">
                                    <Link href="/blog/blog-details">
                                        How AI Is Redefining Software Testing at Evalon QA
                                    </Link>
                                </h4>
                                <p>
                                    Explore how Evalon QA integrates artificial intelligence into quality assurance—optimizing testing speed, accuracy, and coverage while reducing manual effort.
                                </p>
                                <a href="#">18 Oct, 2025</a>
                            </div>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="col-xl-6">
                        <div className="Agenko-blog-item style-two mb-40 pf_fadeup">
                            <div className="post-thumbnail">
                                <Image 
                                    src="/assets/images/pages/new-images/AI-second-blogs.jpeg" 
                                    alt="Intelligent QA Workflows" 
                                    width={260} 
                                    height={260}   
                                    style={{objectFit:"cover"}} 

                                />
                            </div>
                            <div className="post-content">
                                <div className="post-categories">
                                    <a href="#">Recent Blogs</a>
                                </div>
                                <h4 className="title">
                                    <Link href="/blog/blog-details">
                                        Building Smarter QA Pipelines with Evalon’s AI Framework
                                    </Link>
                                </h4>
                                <p>
                                    Learn how our AI-driven framework streamlines testing workflows, predicts potential defects, and empowers QA engineers to focus on innovation over repetition.
                                </p>
                                <a href="#">22 Oct, 2025</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog1;
