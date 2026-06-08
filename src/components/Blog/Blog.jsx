import BlogHeader from "./BlogHeader";
import BlogGrid from "./BlogGrid";

export default function Blog() {
  return (
    <section
      className="blog-section service"
      id="blog"
    >
      <div className="container">

        <BlogHeader />

        <BlogGrid />

      </div>
    </section>
  );
}