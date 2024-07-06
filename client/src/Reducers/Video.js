// const videoReducer =(state= {data:null},action)=>{
//     switch(action.type){
//         case 'POST_VIDEO':
//             return {...state};
//         case 'POST_LIKE':
//             return {...state};
//         case 'FETCH_ALL_VIDEOS':
//             return {...state,data:action.payload};
//         default:
//             return state;
//     }
// }

// export default videoReducer
const videoReducer = (state = { videoData: null, likedVideos: [], allVideos: [] }, action) => {
    switch (action.type) {
      case 'POST_VIDEO':
        return { ...state };
      case 'POST_LIKE':
        return { ...state, likedVideos: [...state.likedVideos, action.payload] };
      case 'REMOVE_LIKE':
        return { ...state, likedVideos: state.likedVideos.filter((video) => video._id !== action.payload._id) };
      case 'FETCH_ALL_VIDEOS':
        return { ...state, allVideos: action.payload };
      case 'FETCH_VIDEO_DATA':
        return { ...state, videoData: action.payload };
      default:
        return state;
    }
  };
  
  export default videoReducer;