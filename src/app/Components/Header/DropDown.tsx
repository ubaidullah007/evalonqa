import { useState } from "react";
import useCheckMobileScreen from "../hook/use-check-mobile-screen";
import Link from "next/link";

export default function DropDown({ children  , content } ) {
  const isItMobile = useCheckMobileScreen();
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
    console.log("state change");
  };

  return (
    <>

      {!isItMobile && (
        <>
          <li className="menu-item-has-children position-relative">
            <Link href="#">
              {content}
            </Link>
            <span
              className={
                mobileToggle
                  ? "cs-munu_dropdown_toggle active"
                  : "cs-munu_dropdown_toggle"
              }
              onClick={handleMobileToggle}
            >
              <span></span>
            </span>
            {children}
          </li >
        </>
      )}


      {isItMobile && (
        <li className="menu-item-has-children position-relative">
          <Link href="#"   onClick={handleMobileToggle}>
            {content}
          </Link>
          <div className="cs-mobile-dropdown">
            <span
              className={
                mobileToggle
                  ? "cs-munu_dropdown_toggle active"
                  : "cs-munu_dropdown_toggle"
                  
              }
              onClick={handleMobileToggle}
            >
              <span></span>
            </span>

            <div
              className={`dropdown-content ${mobileToggle ? "open" : ""}`}
            >
              {children}
            </div>
          </div>
        </li >
      )}
    </>
  );
}
