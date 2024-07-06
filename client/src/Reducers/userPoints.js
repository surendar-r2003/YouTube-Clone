const userPointsReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_USER_POINTS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default userPointsReducer;