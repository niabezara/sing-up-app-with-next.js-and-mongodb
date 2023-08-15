import { error } from "console";
import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  if (!process.env.MONGODB_URL) {
    throw new Error("data base URL isnot defined");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: [true, "firstName is required"],
    minlength: [3, "must contained more than 3 characters"],
  },
  lastName: {
    type: String,
    require: [true, "lastname is required"],
  },
  email: {
    type: String,
    require: [true, "email is required"],
  },
  password: {
    type: String,
    require: [true, "password is required"],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export { connectDB, User };
