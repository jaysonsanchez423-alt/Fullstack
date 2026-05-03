import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoGrid from '../components/VideoGrid';
import { mockVideos } from '../utils/mockData';
import { loadUploadedVideos, removeUploadedVideo } from '../utils/videoStorage';
import './SearchResults.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [videos, setVideos] = useState(mockVideos);

  useEffect(() => {
    const uploaded = loadUploadedVideos();
    setVideos([...mockVideos, ...uploaded]);
  }, []);

  const handleDelete = (id) => {
    removeUploadedVideo(id);
    setVideos((prev) => prev.filter((video) => video.id !== id));
  };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(query.toLowerCase()) ||
    video.channel.toLowerCase().includes(query.toLowerCase()) ||
    video.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results">
      <Navbar />
      <div className="search-content">
        <Sidebar isOpen={false} />
        <main className="search-main">
          <div className="search-header">
            <h2>Search results for "{query}"</h2>
            <p>About {filteredVideos.length} results</p>
          </div>
          <VideoGrid videos={filteredVideos} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
};

export default SearchResults;
