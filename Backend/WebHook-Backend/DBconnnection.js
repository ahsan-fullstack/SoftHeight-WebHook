import mongoose from "mongoose";

export const connectDB = async () => {
  const mongo_url = process.env.MONGO_URL;
  try {
    await mongoose.connect(mongo_url);
    console.log('mongoDb connected Successfully');
  } catch (error) {
    console.log(error);
  }
}