import React from "react";
import React from "react";
import React from "react";
import React from "react";

const Responsibilty = () => {
  return (
    <section className="agk-work-process pt-80 pb-80">
      <div className="container">
        {/* Section Heading & Description */}
        <div className="row align-items-center mb-70">
          <div className="col-lg-7">
            <div className="section-title mb-50 pf_fadeup text-md-start text-center">
              <span className="sub-title">AI Testing Evolution</span>
              <h2 className="text-md-start text-center">
                With Great Power Comes Great Responsibility
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text-md-start text-center text-box mb-55 pf_fadeup">
              <p>
                AI tools are transforming development at an unprecedented pace, but without careful guidance, they can also magnify mistakes. In the next three years, we may see more low-quality code than in the past three decades if humans don’t oversee the process properly.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* First Box */}
          <div className="col-xl-6 col-md-6 col-sm-12">
            <div className="human-Agenko-iconic-box style-two mb-40 pf_fadeup">
              <div className="human-icon">
                <i className="bi bi-shield-lock"></i>
              </div>
              <div className="human-content">
                <h4 className="human-title text-md-start text-center">
                  The Risk of Blind Automation
                </h4>
                <p>
                  Simply generating tests without understanding context leads to brittle suites, false confidence, and missed critical bugs.
                </p>
                <p>
                  Automated test generation without human review may create scripts that break easily when minor changes occur. Over-reliance on AI can give teams a false sense of security while critical bugs go undetected.
                </p>
                <p>
                  Human oversight is crucial to ensure that AI-generated tests accurately reflect real-world scenarios and catch edge cases effectively. Combining AI speed with human judgment produces robust and maintainable test suites.
                </p>
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className="col-xl-6 col-md-6 col-sm-12">
            <div className="human-Agenko-iconic-box style-two mb-40 pf_fadeup">
              <div className="human-icon">
                <i className="bi bi-exclamation-triangle"></i>
              </div>
              <div className="human-content">
                <h4 className="human-title text-md-start text-center">
                  Amplifying Bad Practices
                </h4>
                <p>
                  AI can accelerate the creation of poorly structured code or tests if the human guiding it lacks strong engineering fundamentals.
                </p>
                <p>
                  Without proper guidance, AI might generate repetitive, inefficient, or unsafe code patterns that are hard to maintain. Bad coding habits can scale quickly when amplified by AI, impacting overall software quality.
                </p>
                <p>
                  Educating engineers and integrating code reviews alongside AI-generated content ensures that AI acts as an enhancement rather than a shortcut. This combination fosters innovation while maintaining high standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibilty;
