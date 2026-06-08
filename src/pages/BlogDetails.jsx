import { useParams } from "react-router-dom";
import { blogDetailsData } from "../components/data/blogDetailsData";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import BlogBanner from "../components/BlogDetails/BlogBanner";
import BlogContent from "../components/BlogDetails/BlogContent";

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogDetailsData[slug];

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <>
      <Header />

      <main>

        <BlogBanner
          title={blog.title}
        />

        <BlogContent
          blog={blog}
        />

      </main>

      <Footer />
    </>
  );
}