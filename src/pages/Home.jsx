import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoGrid from '../components/VideoGrid';
import CategoryChips from '../components/CategoryChips';
import { mockVideos, categories } from '../utils/mockData';
import './Home.css';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const filteredVideos = selectedCategory === 'All'
    ? mockVideos
    : mockVideos.filter(video => video.category === selectedCategory);

  return (
    <div className="home">
      <Navbar onMenuClick={toggleSidebar} />
      <div className="home-content">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <CategoryChips
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <VideoGrid videos={filteredVideos} />
        </main>
      </div>
    </div>
  );
};

export default Home;
