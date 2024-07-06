import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String },
  desc: { type: String },
  points: { type: Number, default: 0 },
});

// Check if the model is already defined
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
