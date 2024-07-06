// import { MdPendingActions } from "react-icons/md";

// const chanelReducers =(states=[],action)=>{
//     switch (action.type){
//         case 'UPDATE_DATA':
//             return states.map(state=>state._id=== MdPendingActions.payload._id? action.payload: state)
//         case 'FETCH_CHANELS':
//             return action.payload;
//         default:
//             return states;
//     }
// }
// export default chanelReducers;
const chanelReducers = (state = { chanelData: [] }, action) => {
    switch (action.type) {
      case 'FETCH_CHANEL_DATA':
        return { ...state, chanelData: action.payload };
      case 'UPDATE_CHANEL_DATA':
        return {
          ...state,
          chanelData: state.chanelData.map((chanel) =>
            chanel._id === action.payload._id ? action.payload : chanel
          ),
        };
      default:
        return state;
    }
  };
  
  export default chanelReducers;