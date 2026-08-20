"use client";
import { useEffect, useState } from "react";

/**
 * The footer is statically prerendered, so a bare new Date() in the server
 * component would freeze the year at build time -- correct today, wrong from
 * the next 1 January until someone redeploys.
 *
 * So: render the build-time year into the HTML (which keeps hydration
 * matching and avoids a blank flash), then correct it on the client if the
 * real year has moved on. No redeploy needed for the rollover.
 */
export default function CopyrightYear({ buildYear }: { buildYear: number }) {
  const [year, setYear] = useState(buildYear);

  useEffect(() => {
    const current = new Date().getFullYear();
    if (current !== buildYear) setYear(current);
  }, [buildYear]);

  return <>{year}</>;
}
