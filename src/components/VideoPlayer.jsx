import { useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-player">
      <div className="video-container" onClick={togglePlay}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="video-preview"
        />
        {!isPlaying && (
          <div className="play-overlay">
            <button className="play-btn">
              <svg viewBox="0 0 24 24">
                <path d="M8,5V19L19,12L8,5Z" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="video-controls">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '30%' }}></div>
        </div>
        <div className="controls">
          <button className="control-btn">
            <svg viewBox="0 0 24 24">
              <path d="M8,5V19L19,12L8,5Z" />
            </svg>
          </button>
          <button className="control-btn">
            <svg viewBox="0 0 24 24">
              <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
            </svg>
          </button>
          <span className="time">0:00 / {video.duration}</span>
          <div className="spacer"></div>
          <button className="control-btn">
            <svg viewBox="0 0 24 24">
              <path d="M3,9V15H7L12,20V4L7,9H3Z" />
            </svg>
          </button>
          <button className="control-btn">
            <svg viewBox="0 0 24 24">
              <path d="M7,14H5V12H7V14M12,14H10V12H12V14M19,14H17V12H19V14M7,19H5V17H7V19M12,19H10V17H12V19M19,19H17V17H19V19M7,9H5V7H7V9M12,9H10V7H12V9M19,9H17V7H19V9Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
