import React from 'react';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import About1 from '../Components/About/About1';
import Services2 from '../Components/Services/Services2';
import Project2 from '../Components/Project/Project2';
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre';
import Process2 from '../Components/Process/Process2';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import Faq1 from '../Components/Faq/Faq1';
import Team2 from '../Components/Team/Team2';
import Brand2 from '../Components/Brand/Brand2';
import Blog2 from '../Components/Blog/Blog2';
import Process4 from '../Components/Process/Process4';
import Blog1 from '../Components/Blog/Blog1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import HomeServices from '../Components/Services/home-services';

const page = () => {
    return (
        <div>
            <div className="relative w-100 h-100  overflow-hidden" style={{marginTop:"94px"}}>
                <video
                    src="/bg-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 h-100 object-fit-cover"
                ></video>

           
            </div>
            <HeroBanner2></HeroBanner2>
            <Process4></Process4>
            {/* <About1></About1> */}
            {/* <Services2></Services2> */}
            {/* <Project2></Project2> */}
            <HomeServices />

            <Process2></Process2>
            <Testimonial1></Testimonial1>
            {/* <Blog1></Blog1>         */}
        </div>
    );
};

export default page;