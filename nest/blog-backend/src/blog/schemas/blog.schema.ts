import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  author: String,
  data_posted: String,
});
