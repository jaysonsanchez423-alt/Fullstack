const STORAGE_KEY = 'thundertube_uploaded_videos';

export const loadUploadedVideos = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load uploaded videos:', error);
    return [];
  }
};

export const saveUploadedVideos = (videos) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
  } catch (error) {
    console.error('Failed to save uploaded videos:', error);
  }
};

export const addUploadedVideo = (video) => {
  const saved = loadUploadedVideos();
  saveUploadedVideos([...saved, video]);
};

export const removeUploadedVideo = (id) => {
  const saved = loadUploadedVideos();
  saveUploadedVideos(saved.filter((video) => video.id !== id));
};

export const clearAllUploadedVideos = () => {
  saveUploadedVideos([]);
};

const getRandomImage = () => `https://picsum.photos/320/180?random=${Date.now() % 1000}`;

const getYouTubeThumbnail = (url) => {
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]+)/);
  if (ytMatch) {
    const videoId = ytMatch[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
  return null;
};

export const getVideoThumbnail = (videoUrl, customThumbnailUrl) => {
  if (customThumbnailUrl) return customThumbnailUrl;
  const ytThumbnail = getYouTubeThumbnail(videoUrl);
  if (ytThumbnail) return ytThumbnail;
  return getRandomImage();
};

export const getVideoDuration = (videoUrl) => {
  return new Promise((resolve) => {
    // For YouTube videos, return placeholder
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      resolve('0:00');
      return;
    }
    
    // For local/direct video files, create video element to get duration
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(videoUrl)) {
      const video = document.createElement('video');
      video.onloadedmetadata = () => {
        const mins = Math.floor(video.duration / 60);
        const secs = Math.floor(video.duration % 60);
        resolve(`${mins}:${secs.toString().padStart(2, '0')}`);
      };
      video.onerror = () => resolve('0:00');
      video.src = videoUrl;
    } else {
      resolve('0:00');
    }
  });
};

export const createUploadedVideo = async ({ title, description, category, channel, videoUrl, thumbnailUrl }) => {
  const duration = await getVideoDuration(videoUrl);
  const thumbnail = getVideoThumbnail(videoUrl, thumbnailUrl);
  
  return {
    id: Date.now(),
    title,
    description,
    category,
    channel,
    channelAvatar: 'https://picsum.photos/40/40?random=99',
    thumbnail,
    videoUrl,
    views: 0,
    timestamp: 'Just uploaded',
    duration
  };
};

export const removeMultipleUploadedVideos = (ids) => {
  const saved = loadUploadedVideos();
  saveUploadedVideos(saved.filter((video) => !ids.includes(video.id)));
};

export const getUploadedVideoById = (id) => {
  const videos = loadUploadedVideos();
  return videos.find((video) => video.id === parseInt(id));
};

export const incrementVideoViews = (id) => {
  const saved = loadUploadedVideos();
  const video = saved.find((v) => v.id === parseInt(id));
  if (video) {
    video.views = (parseInt(video.views) || 0) + 1;
    saveUploadedVideos(saved);
  }
};
