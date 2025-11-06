import React from 'react';
import Banner from '../../Components/our-blogs';
import About1 from '../../Components/About/About1';
import Project2 from '../../Components/Project/Project2';
import OurMission from '../../Components/About/our-mission';
import Process from '../../Components/About/process';
import Link from 'next/link';




const page = async () => {



    return (
        <div>
            <Banner title='About Us ' desc='At Evalon QA, we merge AI and human expertise to accelerate testing, eliminate inefficiencies, and ensure flawless product quality.' />
            <About1 />
            <OurMission />
            <Process />
            <section className="cta-dark-section text-center text-white py-5 bg-gradient-to-r from-black via-[#042b2b] to-[#6cffff]">
                <div className="container mx-auto px-4">
                    <h2 className="cta-title mb-3 text-3xl font-semibold">
                        Ready to Elevate Your QA Strategy?
                    </h2>
                    <p className="cta-desc mb-6 text-lg opacity-90 max-w-2xl mx-auto">
                        Partner with Evalon QA to bring intelligence, speed, and reliability to your testing process.
                        Let’s transform how your teams deliver quality.
                    </p>
                    <Link
                        href="/contact"
                        className="btn mt-4 btn-cta inline-block bg-[#6cffff] text-black font-medium py-3 px-6 rounded-full hover:bg-white transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>





        </div>
    );
};

export default page;