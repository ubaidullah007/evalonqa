import Blog2 from '../../Components/Blog/Blog2';
import Blog4 from '../../Components/Blog/Blog4';
import BreadCumb from '../../Components/Common/BreadCumb';
import React from 'react';
import Banner from '../../Components/our-blogs';
import Blog3 from '../../Components/Blog/Blog3';

const page = () => {
  return (
    <div>
                      <Banner title='Recent Blogs & Insights' desc='Dive into expert insights and real-world experiences from Evalon QA’s engineering team. Explore how AI is reshaping the future of quality assurance through smarter automation, intelligent test strategies, and human-AI collaboration.'/>

            <Blog4></Blog4>      
    </div>
  );
};

export default page;