import { Link } from 'react-router-dom';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <Link to={`/watch/${video.id}`} className="video-thumbnail-link">
        <div className="video-thumbnail">
          <img src={video.thumbnail} alt={video.title} />
          <div className="video-duration">{video.duration}</div>
        </div>
      </Link>

      <div className="video-info">
        <div className="channel-avatar">
          <img src={video.channelAvatar} alt={video.channel} />
        </div>

        <div className="video-details">
          <Link to={`/watch/${video.id}`} className="video-title">
            {video.title}
          </Link>
          <Link to={`/channel/${video.channel}`} className="channel-name">
            {video.channel}
          </Link>
          <div className="video-stats">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
