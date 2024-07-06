export const getAllVideos = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('/api/videos');
        const videos = await response.json();
        dispatch({
          type: 'GET_ALL_VIDEOS',
          payload: videos,
        });
      } catch (error) {
        console.error('Error fetching videos:', error);
        dispatch({
          type: 'GET_VIDEOS_FAILURE',
          payload: error,
        });
      }
    };
  };
  
  export const playNextVideo = (currentVideo) => {
    return {
      type: 'PLAY_NEXT_VIDEO',
      payload: currentVideo,
    };
  };