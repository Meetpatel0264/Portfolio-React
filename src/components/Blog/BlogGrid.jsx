import BlogCard from "./BlogCard";
import { blogsData } from "../data/blogsData";

export default function BlogGrid() {
  return (
    <div className="row gy-4 gx-4 justify-content-center">

      {blogsData.map((blog) => (
        <BlogCard
          key={blog.id}
          {...blog}
        />
      ))}

    </div>
  );
}