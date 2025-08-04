import { useParams } from 'react-router-dom';
import { getStoredBlogs } from '../utils/storage.jsx';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blogs = getStoredBlogs();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#1a1a1a]">
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-bold mb-4">Blog Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#1a1a1a] dark:to-gray-900 text-black dark:text-white p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#1a1a1a] p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 italic">
          Posted on {new Date(blog.createdAt).toLocaleString()}
        </p>
        <div className="text-lg leading-relaxed whitespace-pre-wrap text-gray-800 dark:text-gray-200">
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
