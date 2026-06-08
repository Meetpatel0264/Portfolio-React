import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

import Home from "./components/Home";
import ServiceDetails from "./pages/ServiceDetails";
import BlogDetails from "./pages/BlogDetails";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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