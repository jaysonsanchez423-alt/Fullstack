import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoGrid from '../components/VideoGrid';
import { mockVideos } from '../utils/mockData';
import './SearchResults.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredVideos = mockVideos.filter(video =>
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
          <VideoGrid videos={filteredVideos} />
        </main>
      </div>
    </div>
  );
};

export default SearchResults;
