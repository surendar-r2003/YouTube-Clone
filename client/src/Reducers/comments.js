// const commentReducer = (state = { data: null }, action) => {
//   switch (action.type) {
//     case "POST_COMMENT":
//       return { ...state };

//     case "EDIT_COMMENT":
//       return { ...state };
//     case "FETCH_ALL_COMMENTS":
//       return { ...state, data: action.payload };
//     default:
//       return state;
//   }
// };

// export default commentReducer
const commentReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'POST_COMMENT':
      return { ...state, data: [...state.data, action.payload] };
    case 'EDIT_COMMENT':
      return {
        ...state,
        data: state.data.map((comment) =>
          comment._id === action.payload._id ? action.payload : comment
        ),
      };
    case 'FETCH_COMMENTS':
      return { ...state, data: action.payload };
    case 'DELETE_COMMENT':
      return {
        ...state,
        data: state.data.filter((comment) => comment._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default commentReducer;