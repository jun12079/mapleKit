import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { track } from "@vercel/analytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // 把 /#/faq 轉成 /faq，讓 Analytics 報表比較乾淨
    const normalizedPath = location.pathname + location.hash.replace(/^#/, "");
    track("pageview", { path: normalizedPath || "/" });
  }, [location]);

  return null;
}
