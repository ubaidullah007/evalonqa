"use client";
import { useCallback, useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const scrolled = window.scrollY;
      // Total distance actually scrollable, not total page height.
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrolled > 400);
      setProgress(max > 0 ? Math.min(scrolled / max, 1) : 0);
    };

    // scroll fires far faster than the screen repaints, so coalesce into rAF.
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = useCallback(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={toTop}
      className={`scroll-top${visible ? " is-visible" : ""}`}
      aria-label="Scroll back to top"
      // Hidden from the tab order until it is actually on screen, so keyboard
      // users do not land on an invisible control.
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      style={{ ["--scroll-progress" as string]: progress }}
    >
      <span className="scroll-top__ring" aria-hidden="true"></span>
      <svg
        className="scroll-top__icon"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
