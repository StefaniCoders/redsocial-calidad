import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/redsocial");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

export default db;
