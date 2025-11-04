import React from "react";
import Banner from "../../Components/our-blogs";

const Page = () => {
  return (
    <>
      <Banner title="Term & Conditions" desc="" />

      <section className="terms-section pt-80 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="terms-content">
                <p>
                  Welcome to <strong>EvalonQA</strong>. By accessing or using
                  our website and services, you agree to comply with and be
                  bound by the following terms and conditions:
                </p>

                <h4 className="mt-4">1. Service Use</h4>
                <p>
                  Our services are intended for business clients (B2B) seeking
                  QA automation, consulting, and performance testing solutions.
                </p>

                <h4 className="mt-4">2. Intellectual Property</h4>
                <p>
                  All content, frameworks, code, and materials on this website
                  are the exclusive property of EvalonQA. Unauthorized
                  reproduction, modification, or redistribution is strictly
                  prohibited.
                </p>

                <h4 className="mt-4">3. Confidentiality</h4>
                <p>
                  Both parties agree to maintain strict confidentiality of
                  shared data, credentials, and intellectual assets during and
                  after any engagement.
                </p>

                <h4 className="mt-4">4. Limitation of Liability</h4>
                <p>
                  EvalonQA shall not be liable for any indirect, incidental, or
                  consequential damages arising from the use or inability to use
                  our services, including but not limited to data loss or
                  business interruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
