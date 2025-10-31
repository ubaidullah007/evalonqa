"use client";
import React from "react";


export default function AIGuideArticle(data) {
  return (
    <section className="AIguide-section py-5" id="blogs"  style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5" }}>
      <div className="container">
        <article
          className="prose prose-lg max-w-none prose-indigo"
          dangerouslySetInnerHTML={{ __html: data?.data?.html }}
        />
      </div>
    </section>
  );
}
