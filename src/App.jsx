import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ServiceDetails from "./pages/ServiceDetails";
import BlogDetails from "./pages/BlogDetails";

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/service/:slug"
        element={<ServiceDetails />}
      />

      <Route
        path="/blog/:slug"
        element={<BlogDetails />}
      />

    </Routes>
  );
}