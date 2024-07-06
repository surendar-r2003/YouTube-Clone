// import History from "../models/History.js";
// import mongoose from "mongoose";

// export const HistoryController = async (req, res) => {
//   const HistoryData = req.body;

//   // console.log(HistoryData);
//   const addToHistory = new History(HistoryData);

//   try {
//     await addToHistory.save();
//     res.status(200).json("added to History");
//     // console.log("DOne");
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

// export const getAllHistoryController = async (req, res) => {
//   try {
//     const files = await History.find();
//     res.status(200).send(files);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// };

// export const deleteHistoryController = async (req, res) => {
//   const { userId:userId } = req.params;
//   // console.log(userId)
//   try {
//     await History.deleteMany({
//         Viewer:userId
//     });
//     res.status(200).json({ message: "Removed  from your watch Laters" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
import History from "../models/History.js";
import User from "../models/user.js";

export const HistoryController = async (req, res) => {
  const HistoryData = req.body;
  const { userId } = HistoryData;

  try {
    // Save the history data
    const addToHistory = new History(HistoryData);
    await addToHistory.save();

    // Update the user's points
    const user = await User.findById(userId);
    user.points += 5; // Increment the points by 5
    await user.save();

    res.status(200).json("added to History");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllHistoryController = async (req, res) => {
  try {
    const files = await History.find();
    const userIds = [...new Set(files.map(file => file.Viewer))];

    const users = await Promise.all(userIds.map(async userId => {
      const user = await User.findById(userId);
      return { userId, points: user.points };
    }));

    res.status(200).send({ files, users });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deleteHistoryController = async (req, res) => {
  const { userId } = req.params;
  try {
    await History.deleteMany({
      Viewer: userId,
    });
    res.status(200).json({ message: "Removed from your watch history" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};