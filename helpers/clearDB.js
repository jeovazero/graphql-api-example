const mongoose = require('mongoose');
const Post = require('../models/post');

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/posts-app";

async function clearDB() {
  await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
  await Post.collection.drop();
  console.log("cleanned");
  mongoose.disconnect();
}

module.exports = clearDB;