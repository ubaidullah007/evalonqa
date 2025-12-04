import Link from "next/link";
import Header1 from "./Components/Header/Header1";
import Footer from "./Components/Footer/Footer";

export default function NotFound() {
  return (
 <>
    <Header1/>
    <div 
      className="d-flex align-items-center justify-content-center text-center" 
      style={{ minHeight: "80vh", backgroundColor: "black" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            
            {/* 404 Heading */}
            <h1 className="display-1 fw-bold text-white" style={{ fontSize: "6rem" }}>
              404
            </h1>

            {/* English Title */}
            <h2 className="mb-3 text-uppercase  fw-bold">Oops! Page Not Found</h2>

            {/* Professional English Description */}
            <p className="lead mb-5 text-white">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Button */}
            <Link href="/" className="btn btn-primary btn-lg px-4 text-uppercase">
              Back to Homepage
            </Link>

          </div>
        </div>
      </div>
    </div>
    <Footer/>
 </>
  );
}