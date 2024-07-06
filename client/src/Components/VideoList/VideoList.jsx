import React, { useState, useEffect } from 'react';
import './VideoList.css';
import { handleGesture } from '../../utils/gestures';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideos, playNextVideo } from '../../actions/videos.js';

const VideoList = ({ videoId }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.videoReducer);

  useEffect(() => {
    const handleVideoListGesture = (event) => {
      handleGesture(event, {
        tripleTap: (side) => {
          if (side === 'middle') {
            playNextVideo();
          }
        },
      });
    };

    document.addEventListener('touchstart', handleVideoListGesture);
    return () => {
      document.removeEventListener('touchstart', handleVideoListGesture);
    };
  }, []);

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);

  const handlePlayNextVideo = () => {
    dispatch(playNextVideo(currentVideoIndex));
  };

  return (
    <div className="video-list">
      {videos
        .filter((video) => video._id === videoId)
        .map((video, index) => (
          <div
            key={video.id}
            className={`video-item ${index === currentVideoIndex ? 'active' : ''}`}
            onClick={() => setCurrentVideoIndex(index)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      <button className="next-video-btn" onClick={handlePlayNextVideo}>
        Play Next Video
      </button>
    </div>
  );
};

export default VideoList;