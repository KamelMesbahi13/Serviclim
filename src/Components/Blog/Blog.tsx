import { lazy } from "react";
const Header = lazy(() => import("./Header/Header.tsx"));
const BlogContent = lazy(() => import("./BlogContent/BlogContent.tsx"));

const Blog = () => {
  return (
    <div>
      <Header />
      <BlogContent />
      <div className="container"></div>
    </div>
  );
};

export default Blog;
