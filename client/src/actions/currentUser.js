export const setCurrentUser = (user) => ({
    type: "FETCH_CURRENT_USER",
    payload: user,
  });
  
  export const fetchCurrentUser = () => (dispatch) => {
    const user = JSON.parse(localStorage.getItem("Profile"));
    dispatch(setCurrentUser(user));
  };