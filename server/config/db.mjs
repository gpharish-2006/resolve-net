import mongoose from "mongoose";

const mongo = async () => {

  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Mongo Connected");
};

export default mongo;