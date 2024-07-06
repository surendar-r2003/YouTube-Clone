// import React from "react";
// import { FaEdit, FaUpload } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import "./DescribeChanel.css";
// function DecribeChanel({ setEditCreateChanelBtn, Cid,setVidUploadPage }) {
//   const chanels = useSelector((state) => state?.chanelReducers);

//   // console.log(Cid)
//   const currentChanel = chanels.filter((c) => c._id === Cid)[0];

//   const CurrentUser = useSelector((state) => state?.currentUserReducer);

//   return (
//     <div className="container3_chanel">
//       <div className="chanel_logo_chanel">
//         <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
//       </div>
//       <div className="description_chanel">
//         <b> {currentChanel?.name} </b>
//         <p> {currentChanel?.desc} </p>
//       </div>
//       {CurrentUser?.result._id === currentChanel?._id && (
//         <>
//           <p
//             className="editbtn_chanel"
//             onClick={() => {
//               setEditCreateChanelBtn(true);
//             }}
//           >
//             <FaEdit />
//             <b> Edit Chanel</b>
//           </p>
//           <p className="uploadbtn_chanel" onClick={()=>setVidUploadPage(true)}>
//             <FaUpload />
//             <b> Upload Video</b>
//           </p>
//         </>
//       )}
//     </div>
//   );
// }

// export default DecribeChanel;
// import React from "react";
// import { FaEdit, FaUpload } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import "./DescribeChanel.css";

// function DecribeChanel({ setEditCreateChanelBtn, Cid, setVidUploadPage }) {
//   const chanelsData = useSelector((state) => state?.chanelReducers);
//   const CurrentUser = useSelector((state) => state?.currentUserReducer);

//   // Check if chanelsData is an array
//   if (!Array.isArray(chanelsData)) {
//     console.error("chanelsData is not an array");
//     return null;
//   }

//   const currentChanel = chanelsData.find((c) => c._id === Cid);

//   // Check if currentChanel exists
//   if (!currentChanel) {
//     console.error("currentChanel is undefined");
//     return null;
//   }

//   return (
//     <div className="container3_chanel">
//       <div className="chanel_logo_chanel">
//         <b>{currentChanel.name.charAt(0).toUpperCase()}</b>
//       </div>
//       <div className="description_chanel">
//         <b> {currentChanel.name} </b>
//         <p> {currentChanel.desc} </p>
//       </div>
//       {CurrentUser?.result._id === currentChanel._id && (
//         <>
//           <p
//             className="editbtn_chanel"
//             onClick={() => {
//               setEditCreateChanelBtn(true);
//             }}
//           >
//             <FaEdit />
//             <b> Edit Chanel</b>
//           </p>
//           <p
//             className="uploadbtn_chanel"
//             onClick={() => setVidUploadPage(true)}
//           >
//             <FaUpload />
//             <b> Upload Video</b>
//           </p>
//         </>
//       )}
//     </div>
//   );
// }

// export default DecribeChanel;
import React from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./DescribeChanel.css";

function DecribeChanel({ setEditCreateChanelBtn, Cid, setVidUploadPage }) {
  const chanelsData = useSelector((state) => state?.chanelReducers);
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  // Check if chanelsData is an array
  if (!Array.isArray(chanelsData)) {
    console.error("chanelsData is not an array");
    return null;
  }

  const currentChanel = chanelsData.find((c) => c._id === Cid);

  // Check if currentChanel exists
  if (!currentChanel) {
    console.error("currentChanel is undefined");
    return null;
  }

  return (
    <div className="container3_chanel">
      <div className="chanel_logo_chanel">
        <b>{currentChanel.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b> {currentChanel.name} </b>
        <p> {currentChanel.desc} </p>
      </div>
      {CurrentUser?.result._id === currentChanel._id && (
        <>
          <p
            className="editbtn_chanel"
            onClick={() => {
              setEditCreateChanelBtn(true);
            }}
          >
            <FaEdit />
            <b> Edit Chanel</b>
          </p>
          <p
            className="uploadbtn_chanel"
            onClick={() => setVidUploadPage(true)}
          >
            <FaUpload />
            <b> Upload Video</b>
          </p>
        </>
      )}
    </div>
  );
}

export default DecribeChanel;