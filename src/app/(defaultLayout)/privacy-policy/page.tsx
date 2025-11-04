import React from "react";
import Banner from "../../Components/our-blogs";

const Page = () => {
  return (
    <>
      <Banner title="Privacy Policy" desc="" />

     <section className="terms-section pt-80 pb-80">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="terms-content">
          <p>
            At <strong>EvalonQA</strong>, we respect your privacy and are committed to protecting your personal data.
          </p>

          <h4 className="mt-4">1. Information Collection</h4>
          <p>
            We collect only essential information such as your name, email, company, and project requirements when you contact us or subscribe to our services.
          </p>

          <h4 className="mt-4">2. Use of Information</h4>
          <p>We use this information to:</p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Deliver and manage requested services</li>
            <li>Improve user experience</li>
            <li>Share relevant updates or promotional content (only with your consent)</li>
          </ul>

          <h4 className="mt-4">3. Data Protection</h4>
          <p>
            We apply industry-standard security measures to ensure your data remains safe from unauthorized access, alteration, or disclosure.
          </p>

          <h4 className="mt-4">4. Third-Party Sharing</h4>
          <p>
            EvalonQA does not sell or rent personal data to any third parties. Information may only be shared with trusted service partners under strict confidentiality agreements.
          </p>

          <h4 className="mt-4">5. Your Rights</h4>
          <p>
            You can request access, correction, or deletion of your personal data at any time by contacting us at 
            <a href="mailto:info@evalonqa.com" className="ml-1">info@evalonqa.com</a>
          </p>

          <h4 className="mt-4">6. Policy Updates</h4>
          <p>
            EvalonQA may update this Privacy Policy periodically. Any changes will be reflected on this page with the revised date.
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
