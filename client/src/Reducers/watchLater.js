// const  watchLaterReducer =(state={data:null},action)=>{
//     switch (action.type){
//         case 'POST_WATCHLATER':
//             return { ...state, data: action?.data };
//         case 'FETCH_ALL_WATCHLATER_VIDEOS':
//             return {...state,data:action.payload};
//         default:
//             return state;
//     }
// }
// export default watchLaterReducer;
const watchLaterReducer = (state = { data: null }, action) => {
    switch (action.type) {
      case 'POST_WATCH_LATER':
        return { ...state, data: action.payload };
      case 'FETCH_WATCH_LATER':
        return { ...state, data: action.payload };
      case 'ADD_TO_WATCH_LATER':
        return { ...state, data: [...state.data, action.payload] };
      case 'REMOVE_FROM_WATCH_LATER':
        return {
          ...state,
          data: state.data.filter((video) => video._id !== action.payload._id),
        };
      default:
        return state;
    }
  };
  
  export default watchLaterReducer;