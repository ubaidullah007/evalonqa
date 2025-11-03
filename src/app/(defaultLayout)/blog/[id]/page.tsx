import BlogDetails from '../../../Components/BlogDetails/BlogDetails';
import BreadCumb from '../../../Components/Common/BreadCumb';
import React from 'react';
import { blogData } from '../../../Data/blogData';
import Banner from '../../../Components/our-blogs';
interface BlogProps {
  params: Promise<{
    id: string;
  }>;
}
const page = async ({ params }: BlogProps) => {

  const resolvedParams = await params;

  const blogs = blogData.find(
    (obj) => obj.link?.toLowerCase() === resolvedParams.id?.toLowerCase()
  );

  if (!blogs) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Service not found
      </div>
    );
  }

  const {
    title = {},
    date = {},
    popularTags = [],
    ReadTime = [],
    thumbnail = {},
    content = {},
  } = blogs;



  return (
    <div>
             <Banner title={blogs?.title} desc=''/>
            <BlogDetails data ={blogs} ></BlogDetails>       
    </div>
  );
};

export default page;