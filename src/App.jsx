import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import FirstPortfolioPage from "./components/FirstPortfolioPage";
import HelpfulGuidPage from "./components/HelpfulGuidPage";
import WebDevlopmentBlogPage from "./components/WebDevlopmentBlogPage";

// New Dynamic Page
import ServiceDetails from "./pages/ServiceDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Dynamic Service Route */}
      <Route
        path="/service/:slug"
        element={<ServiceDetails />}
      />

      <Route
        path="/first-portfolio"
        element={<FirstPortfolioPage />}
      />

      <Route
        path="/helpful-guid"
        element={<HelpfulGuidPage />}
      />

      <Route
        path="/web-devlopment-blog"
        element={<WebDevlopmentBlogPage />}
      />
    </Routes>
  );
}