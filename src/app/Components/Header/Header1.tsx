"use client";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";

export default function Header1({ variant }: any) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky"); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky"); // Scrolling up
      } else {
        setIsSticky("");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <header
        className={`bg-black cs-gescout_show cs_site_header header_style_2 cs_style_1 header_sticky_style1 ${
          variant ? variant : ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky ? isSticky : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              {/* Left Logo */}
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <Image
                    src="/assets/images/creative-agency/logo/logo-main.png"
                    alt="Logo"
                    width={151}
                    height={40}
                  />
                </Link>
              </div>

              {/* Center Nav */}
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  {/* Hamburger for mobile */}
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>

                  {/* Desktop menu always visible */}
                  <div className="desktop-menu">
                    <Nav setMobileToggle={setMobileToggle} />
                  </div>
                </div>
              </div>

              {/* Right Button */}
              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <div className="main-button">
                    <Link href="/contact" className="theme-btn style-one">
                      <span className="text-flip">
                        <span className="text">Schedule a Consultation</span>
                        <span className="text">Schedule a Consultation</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`menu-overlay ${mobileToggle ? "show" : ""}`}
        onClick={() => setMobileToggle(false)}
      ></div>

      {/* Animated Side Menu */}
      <div className={`mobile-menu ${mobileToggle ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMobileToggle(false)}>
          <span></span>
          <span></span>
        </button>
        <Nav setMobileToggle={setMobileToggle} />
      </div>
    </div>
  );
}
