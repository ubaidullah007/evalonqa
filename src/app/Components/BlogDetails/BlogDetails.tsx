"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Example Data (You can later fetch this from API or CMS)

const BlogDetails = (data: any) => {
  return (
    <section className="Agenko-blog-detils pt-100 pb-100">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-xl-8">
            <div className="blog-details-wrapper">
              <div className="Agenko-post-item pf_fadeup">
                <div className="main-post">
                  <div className="post-thumbnail">
                    <Image
                      src={data?.data.thumbnail}
                      alt={data?.data.title}
                      width={777}
                      height={605}
                      className="object-fit-cover"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span>
                        <i className="bi bi-calendar-fill"></i>
                        {data?.data.date}
                      </span>
                    </div>
                    <h4 className="post-title">{data?.data.title}</h4>

                    {/* ✅ Render blog content safely */}
                    <div
                      className="blog-html-content"
                      dangerouslySetInnerHTML={{ __html: data?.data.content }}
                    ></div>
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="entry-footer wow fadeInUp">
                  <div className="tag-links">
                    <span>Tag:</span>
                    {data?.data?.popularTags.slice(0,3).map((tag, index) => (
                      <Link href="#" key={index}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="social-share">
                    <span>Share:</span>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-4">
            <div className="sidebar-widget-area">
              <div className="sidebar-widget sidebar-category-widget mb-30 pf_fadeup">
                <div className="widget-content">
                  <h4 className="sidebar-title">Explore our Ai Guide</h4>
                  <ul className="widget-nav">
                    <li>
                      <Link href="/ai-guide/ai-powered-playwright">
                        AI-Powered Playwright
                      </Link>
                    </li>
                    <li>
                      <Link href="/ai-guide/smart-test-data">
                        Smart Test Data
                      </Link>
                    </li>
                    <li>
                      <Link href="/ai-guide/optimized-cursor-usage">
                        Optimized Cursor Usage
                      </Link>
                    </li>
                    <li>
                      <Link href="/ai-guide/bug-documentation">
                        AI Bug Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="/ai-guide/productivity">
                        The 3x QA Engineer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sidebar-widget sidebar-tag-widget pf_fadeup mb-30">
                <div className="widget-content">
                  <h4 className="sidebar-title">Popular Tags</h4>
                  <div className="tagcloud">
                    {data?.data?.popularTags.map((tag, index) => (
                      <Link href="#" key={index}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
