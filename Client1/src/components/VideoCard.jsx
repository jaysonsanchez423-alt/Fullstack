import { Link } from 'react-router-dom';
import './VideoCard.css';

const formatViews = (views) => {
  const count = parseInt(views) || 0;
  if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
  if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
  return count.toString();
};

const VideoCard = ({ video, onDelete, isSelected, onSelect, isSelectionMode }) => {
  const isUploaded = Boolean(video.videoUrl);

  return (
    <div className={`video-card ${isSelected ? 'selected' : ''}`}>
      {isSelectionMode && isUploaded && (
        <div className="video-checkbox">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => onSelect(video.id, e.target.checked)}
          />
        </div>
      )}
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
        {isUploaded && onDelete && !isSelectionMode && (
          <button className="delete-btn" onClick={() => onDelete(video.id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
