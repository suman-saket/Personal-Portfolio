import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug, getAllBlogs } from '../data/blogs';
import { formatBlogDate } from '../utils/formatDate';
import {
  mutedText,
  navLinkClass,
  pageContainer,
  proseContentClassName,
  subtleBorder,
} from '../utils/styles';

function BlogPost() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);
  const allBlogs = getAllBlogs();

  if (!blog) {
    return (
      <div className={`mt-2 pb-12 ${pageContainer.medium}`}>
        <h1 className="text-4xl mt-14 mb-3 font-serif">Blog Post Not Found</h1>
        <p className={`mb-6 ${mutedText}`}>The blog post you're looking for doesn't exist.</p>
        <Link to="/blogs" className={navLinkClass(false)}>
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const currentIndex = allBlogs.findIndex((b) => b.id === blog.id);
  const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  return (
    <div className={`mt-2 pb-12 ${pageContainer.medium}`}>
      <article>
        <h1 className="text-4xl mt-14 mb-3 font-serif">{blog.title}</h1>
        <time dateTime={blog.date} className={`text-sm ${mutedText}`}>
          {formatBlogDate(blog.date)}
        </time>

        <div
          className={proseContentClassName}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {(prevBlog || nextBlog) && (
          <div className={`flex justify-between gap-8 mt-12 pt-6 border-t ${subtleBorder} flex-wrap max-md:flex-col`}>
            {prevBlog && (
              <Link
                to={`/blogs/${prevBlog.slug}`}
                className={`${navLinkClass(false)} max-w-[45%] font-mono text-sm max-md:max-w-full`}
              >
                ← {prevBlog.title}
              </Link>
            )}
            {nextBlog && (
              <Link
                to={`/blogs/${nextBlog.slug}`}
                className={`${navLinkClass(false)} max-w-[45%] font-mono text-sm ml-auto text-right max-md:max-w-full max-md:ml-0 max-md:text-left`}
              >
                {nextBlog.title} →
              </Link>
            )}
          </div>
        )}
      </article>
    </div>
  );
}

export default BlogPost;
