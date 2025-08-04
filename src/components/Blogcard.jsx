import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/post/${blog.id}`)}
      className="bg-white dark:bg-[#1a1a1a] rounded-lg border shadow-md p-4 cursor-pointer hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
        {blog.content.length > 80 ? blog.content.slice(0, 80) + '...' : blog.content}
      </p>
      <p className="text-gray-400 text-xs">
        Posted on {new Date(blog.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default BlogCard;
