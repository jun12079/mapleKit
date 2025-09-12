import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AnalyticsTracker from "../components/AnalyticsTracker";

export default function FrontLayout() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <AnalyticsTracker />
        <Header />
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}