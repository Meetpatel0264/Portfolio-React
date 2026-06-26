import BlogSection from "./BlogSection";

export default function BlogContent({ blog }) {
  return (
    <section className="service py-100">
      <div className="container">
        {blog.sections.map((section, index) => (
          <BlogSection
            key={index}
            {...section}
            index={index}
          />
        ))}

      </div>
    </section>
  );
}