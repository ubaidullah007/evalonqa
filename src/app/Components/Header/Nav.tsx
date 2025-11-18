import Link from "next/link";
import DropDown from "./DropDown";
import useCheckMobileScreen from "../hook/use-check-mobile-screen";

export default function Nav({ setMobileToggle }) {
  const isItMobile = useCheckMobileScreen();

  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/about-us" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      <DropDown content="Services">
        {!isItMobile ? (
          <ul>
            <div className="row custom-eqa-dropdown">
              <Link
                className="col-6"
                href="/service/startups"
                onClick={() => setMobileToggle(false)}
              >
                <li className=" d-flex align-items-center gap-2">
                  <i className="bi bi-rocket-takeoff mx-1 our-color "></i>
                  Startups
                </li>
                <p style={{ fontSize: "12px" }}>
                  Focused QA support built for fast paced startup teams aiming
                  for quick growth and a strong product market fit.
                </p>
              </Link>

              <Link
                className="col-6"
                href="/service/legacy-modernization"
                onClick={() => setMobileToggle(false)}
              >
                <li className=" d-flex align-items-center gap-2">
                  <i className="bi bi-recycle mx-1 our-color "></i>
                  Legacy
                </li>
                <p style={{ fontSize: "12px" }}>
                  If you are a legal firm, school network, or any successful
                  business expanding into software, Evalon QA delivers the right
                  testing support.
                </p>
              </Link>

              <Link
                className="col-6"
                href="/service/non-traditional"
                onClick={() => setMobileToggle(false)}
              >
                <li className=" d-flex align-items-center gap-2">
                  <i className="bi bi-lightbulb mx-1 our-color "></i>
                  Non Traditional
                </li>
                <p style={{ fontSize: "12px" }}>
                  Skilled QA services for established companies upgrading or
                  transforming older systems while keeping everything stable and
                  reliable.
                </p>
              </Link>

              <Link
                className="col-6"
                href="/service/dev-shops"
                onClick={() => setMobileToggle(false)}
              >
                <li className=" d-flex align-items-center gap-2">
                  <i className="bi bi-people mx-1 our-color "></i>
                  Dev Shops
                </li>
                <p style={{ fontSize: "12px" }}>
                  Strengthen your agency workflow by adding Evalon QA experts
                  who help boost delivery quality and improve client
                  satisfaction.
                </p>
              </Link>
            </div>
          </ul>
        ) : (
          <ul>
            <li>
              <Link
                href="/service/startups"
                onClick={() => setMobileToggle(false)}
              >
                Startups
              </Link>
            </li>
            <li>
              <Link
                href="/service/legacy-modernization"
                onClick={() => setMobileToggle(false)}
              >
                Legacy
              </Link>
            </li>
            <li>
              <Link
                href="/service/non-traditional"
                onClick={() => setMobileToggle(false)}
              >
                Non-Traditional
              </Link>
            </li>
            <li>
              <Link
                href="/service/dev-shops"
                onClick={() => setMobileToggle(false)}
              >
                Dev Shops
              </Link>
            </li>
          </ul>
        )}
      </DropDown>

      <DropDown content="AI Guides">
        {!isItMobile ? (
          <ul className="AI-GUIDE_EMM">
            <div className="row custom-eqa-dropdown">
              <Link
                className="col-4"
                href="/ai-guide/ai-powered-playwright"
                onClick={() => setMobileToggle(false)}
              >
                <li className="">
                  <i className="bi bi-play-btn mx-1 our-color "></i>
                  AI-Powered Playwright
                </li>
                <p style={{ fontSize: "12px" }}>
              Create Playwright tests using AI supported HTML analysis without needing to open the browser.
                </p>
              </Link>
              <Link
                href="/ai-guide/smart-test-data"
                onClick={() => setMobileToggle(false)}
                className="col-4"
              >
                <li className=" ">
                  <i className="bi bi-database mx-1 our-color "></i>
                  Smart Test Data
                </li>
                <p style={{ fontSize: "12px" }}>
                 Generate realistic and structured test data by building factories directly from your schemas
                </p>
              </Link>
              <Link
                href="/ai-guide/optimized-cursor-usage"
                onClick={() => setMobileToggle(false)}
                className="col-4"
              >
                <li className="">
                  <i className="bi bi-cursor mx-1 our-color "></i>
                  Optimized Cursor Usage
                </li>
                <p style={{ fontSize: "12px" }}>
              Use advanced Cursor Ask mode techniques that speed up test creation and improve accuracy.
                </p>
              </Link>
              <Link
                href="/ai-guide/bug-documentation"
                onClick={() => setMobileToggle(false)}
                className="col-4"
              >
                <li className="">
                  <i className="bi bi-file-text mx-1 our-color "></i>
                  AI Bug Documentation
                </li>
                <p style={{ fontSize: "12px" }}>
                 Turn bug descriptions into well formatted tickets instantly with the help of AI automation.
                </p>
              </Link>

                <Link
                className="col-4"
                  href="/ai-guide/productivity"
                  onClick={() => setMobileToggle(false)}
                >
                  
              <li className="">
                  <i className="bi bi-graph-up-arrow mx-1 our-color "></i>
                  
                  The 3x QA Engineer
              </li>
                <p style={{ fontSize: "12px" }}>
                  Boost engineering output with AI driven efficiency for faster delivery cycles and lower costs.
                </p>
                </Link>

            </div>
          </ul>
        ) : (
          <ul>
            <li>
              <Link
                href="/ai-guide/ai-powered-playwright"
                onClick={() => setMobileToggle(false)}
              >
                AI-Powered Playwright
              </Link>
            </li>
            <li>
              <Link
                href="/ai-guide/smart-test-data"
                onClick={() => setMobileToggle(false)}
              >
                Smart Test Data
              </Link>
            </li>
            <li>
              <Link
                href="/ai-guide/optimized-cursor-usage"
                onClick={() => setMobileToggle(false)}
              >
                Optimized Cursor Usage
              </Link>
            </li>
            <li>
              <Link
                href="/ai-guide/bug-documentation"
                onClick={() => setMobileToggle(false)}
              >
                AI Bug Documentation
              </Link>
            </li>

            <li>
              <Link
                href="/ai-guide/productivity"
                onClick={() => setMobileToggle(false)}
              >
                The 3x QA Engineer
              </Link>
            </li>
          </ul>
        )}
      </DropDown>

      <li>
        <Link href="/case-studies" onClick={() => setMobileToggle(false)}>
          Case Studies
        </Link>
      </li>

      <li>
        <Link href="/humans" onClick={() => setMobileToggle(false)}>
          Humans
        </Link>
      </li>
    </ul>
  );
}
