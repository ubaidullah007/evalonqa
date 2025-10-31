"use client";
import React from "react";
import Link from "next/link";

export default function Banner(data) {
  return (
    <section className="AIhero-section d-flex align-items-center text-center text-white">
      <div className="container AIcontainer">
        <div className="row justify-content-center AIrow">
          <div className="col-lg-8 col-md-10 AIcol text-white z-auto">
            <h1 className="display-4 mb-3 fw-bold AIhero-title">
              {data?.data?.title}
            </h1>
            <p className="lead mb-4 AIhero-subtitle">
              {data?.data?.description}
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap AIbutton-group">
        
              <Link href="#blogs" className="btn btn-outline-light px-4 py-2 rounded-pill AIbtn-outline">
              Scroll Down To Read This Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
