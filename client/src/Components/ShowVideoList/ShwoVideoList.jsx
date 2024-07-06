import React from 'react';
import VideoList from '../VideoList/VideoList';

function ShwoVideoList({ videoId }) {
  return (
    <div className="Container_ShowVideoGrid">
      <VideoList videoId={videoId} />
    </div>
  );
}

export default ShwoVideoList;