import { Link } from 'react-router-dom';
import { formatBlogDate } from '../utils/formatDate';
import { mutedText } from '../utils/styles';

function BlogCard({ blog }) {
  return (
    <li>
      <Link
        to={`/blogs/${blog.slug}`}
        className="flex justify-between items-center gap-4 py-3 hover:underline underline-offset-4 max-md:flex-col max-md:items-start max-md:gap-1"
      >
        <span className={`w-[40%] max-md:w-full max-md:text-sm ${mutedText}`}>
          {formatBlogDate(blog.date)}
        </span>
        <span className="w-full font-mono text-lg max-md:text-base">{blog.title}</span>
      </Link>
    </li>
  );
}

export default BlogCard;
