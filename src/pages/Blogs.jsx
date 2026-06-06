import { getAllBlogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import { mutedText, pageContainer } from '../utils/styles';

function Blogs() {
  const blogs = getAllBlogs();

  return (
    <div className={`my-8 ${pageContainer.wide}`}>
      {blogs.length === 0 ? (
        <p className={`text-lg ${mutedText}`}>No blog posts yet. Check back soon!</p>
      ) : (
        <ul className="list-none p-0 m-0">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Blogs;
