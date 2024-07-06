import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css';
import { handleGesture } from '../../utils/gestures';
import { getCurrentLocationAndTemperature } from '../../utils/geolocation';
import Comments from '../Comments/Comments';

const VideoPlayer = ({ videoUrl, videoId }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState('');
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const handleVideoPlayerGesture = (event) => {
      handleGesture(event, {
        doubleTap: (side) => {
          if (side === 'right') {
            videoRef.current.currentTime += 10;
          } else if (side === 'left') {
            videoRef.current.currentTime -= 10;
          }
        },
        singleTap: (side) => {
          if (side === 'middle') {
            togglePlayback();
          } else if (side === 'top-right') {
            showLocationAndTemperature();
          }
        },
        tripleTap: (side) => {
          if (side === 'middle') {
            playNextVideo();
          } else if (side === 'right') {
            window.close();
          } else if (side === 'left') {
            toggleCommentSection();
          }
        },
        hold: (side) => {
          if (side === 'right') {
            videoRef.current.playbackRate = 2;
          } else if (side === 'left') {
            videoRef.current.playbackRate = 0.5;
          }
        },
      });
    };

    videoRef.current.addEventListener('touchstart', handleVideoPlayerGesture);
    return () => {
      videoRef.current.removeEventListener('touchstart', handleVideoPlayerGesture);
    };
  }, []);

  const togglePlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const toggleCommentSection = () => {
    setIsCommentSectionVisible(!isCommentSectionVisible);
  };

  const showLocationAndTemperature = async () => {
    const { location, temperature } = await getCurrentLocationAndTemperature();
    setLocation(location);
    setTemperature(temperature);
    // Display the location and temperature in a popup message
  };

  return (
    <div className="video-player">
      <video ref={videoRef} src={videoUrl} controls />
      {location && temperature && (
        <div className="location-temperature-popup">
          <p>Location: {location}</p>
          <p>Temperature: {temperature}</p>
        </div>
      )}
      <div className={`comment-section ${isCommentSectionVisible ? 'visible' : ''}`}>
        <Comments videoId={videoId} />
      </div>
      <div className="video-list">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`video-item ${index === currentVideoIndex ? 'active' : ''}`}
          >
            {/* Render the video item */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;