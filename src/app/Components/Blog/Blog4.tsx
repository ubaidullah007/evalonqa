import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { blogData } from '../../Data/blogData'

const Blog4 = () => {



  return (
    <section className="Agenko-blog-grid pt-130 pb-80">
      <div className="container">
        <div className="row justify-content-start">
          {blogData.map((item, i) => {
            const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })

            return (
              <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                <div className="Agenko-blog-item style-four mb-40 pf_fadeup">
                  <div className="post-thumbnail">
                    <Image src={item.thumbnail} className='object-fit-cover' alt="img" width={414} height={323} />
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span><i className="bi bi-calendar-fill"></i> {item?.date}</span>
                      <span><i className="bi bi-chat"></i> {item?.ReadTime} mint read</span>
                    </div>
                    <h4 className="title">
                      <Link href={`/blog/${item.link}`}>{item.title}</Link>
                    </h4>
                    <p>{item.shortdesc.substring(0, 120)}...</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog4
