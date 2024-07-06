// const  likedVideoReducer =(state={data:null},action)=>{
//     switch (action.type){
//         case 'POST_LIKEDVIDEO':
//             return { ...state, data: action?.data };
//         case 'FETCH_ALL_LIKED_VIDEOS':
//             return {...state,data:action.payload};
//         default:
//             return state;
//     }
// }
// export default likedVideoReducer;
const likedVideoReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_LIKED_VIDEOS':
        return action.payload;
      case 'LIKE_VIDEO':
        return [...state, action.payload];
      case 'UNLIKE_VIDEO':
        return state.filter((video) => video._id !== action.payload._id);
      default:
        return state;
    }
  };
  
  export default likedVideoReducer;