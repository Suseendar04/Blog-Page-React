import { useEffect, useState } from 'react';
import { getStoredBlogs } from '../utils/storage.jsx';
import BlogCard from '../components/Blogcard.jsx';
import CreateBlogModal from '../components/CreateBlogModal.jsx';

const POSTS_PER_BATCH = 5;

const BlogPage = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState([]);
  const [batchIndex, setBatchIndex] = useState(1);

  useEffect(() => {
    const stored = getStoredBlogs();
    setAllBlogs(stored);
    setVisibleBlogs(stored.slice(0, POSTS_PER_BATCH));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (scrollBottomReached) {
        setBatchIndex((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const nextVisible = allBlogs.slice(0, POSTS_PER_BATCH * batchIndex);
    setVisibleBlogs(nextVisible);
  }, [batchIndex, allBlogs]);

  const handleNewPost = (updatedBlogs) => {
    setAllBlogs(updatedBlogs);
    setVisibleBlogs(updatedBlogs.slice(0, POSTS_PER_BATCH * batchIndex));
  };

  return (
    <div className="min-h-screen bg-black md:bg-gray-900">
    
      <div className="bg-white py-8 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">All Blog Posts</h1>

        <div className="mb-6 text-center">
          <CreateBlogModal onNewPost={handleNewPost} />
        </div>

        {visibleBlogs.length === 0 ? (
          <div className="text-center text-gray-500">No posts</div>
        ) : (
          <div className="grid gap-6">
            {visibleBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default BlogPage;
