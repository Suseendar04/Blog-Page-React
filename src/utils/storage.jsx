export const getStoredBlogs = () => {
  const raw = localStorage.getItem('blogs');
  return raw ? JSON.parse(raw) : [];
};

export const saveBlog = (blog) => {
  const existing = getStoredBlogs();
  const updated = [blog, ...existing];
  localStorage.setItem('blogs', JSON.stringify(updated));
};
