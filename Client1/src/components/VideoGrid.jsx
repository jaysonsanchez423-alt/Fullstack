import VideoCard from './VideoCard';
import './VideoGrid.css';

const VideoGrid = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
