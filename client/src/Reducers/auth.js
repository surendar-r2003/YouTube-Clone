// const authReducer = (state = { data: null }, actions) => {
//   switch (actions.type) {
//     case 'AUTH':
//       localStorage.setItem("Profile", JSON.stringify({ ...actions?.data }));
//       return { ...state, data: actions?.data };
//     default:
//       return state;
//   }
// };
// export default authReducer;
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;