import { Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />} />
      <Route path="/post/:id" element={<BlogDetailPage />} />
    </Routes>
  );
}

export default App;
