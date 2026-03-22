import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoPlayer from '../components/VideoPlayer';
import VideoGrid from '../components/VideoGrid';
import { mockVideos } from '../utils/mockData';
import './Watch.css';

const Watch = () => {
  const { id } = useParams();
  const video = mockVideos.find(v => v.id === parseInt(id));
  const relatedVideos = mockVideos.filter(v => v.id !== parseInt(id)).slice(0, 8);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="watch">
      <Navbar />
      <div className="watch-content">
        <Sidebar isOpen={false} />
        <main className="watch-main">
          <div className="video-section">
            <VideoPlayer video={video} />
            <div className="video-info">
              <h1 className="video-title">{video.title}</h1>
              <div className="video-meta">
                <span className="views">{video.views} views</span>
                <span className="timestamp">{video.timestamp}</span>
              </div>
              <div className="channel-info">
                <img src={video.channelAvatar} alt={video.channel} className="channel-avatar" />
                <div className="channel-details">
                  <h3 className="channel-name">{video.channel}</h3>
                  <span className="subscriber-count">1.2M subscribers</span>
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <div className="video-description">
                <p>{video.description}</p>
              </div>
            </div>
          </div>
          <div className="related-section">
            <h3>Related Videos</h3>
            <VideoGrid videos={relatedVideos} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Watch;
