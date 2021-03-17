import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  author: String,
  title: String,
  message: String,
  tags: [String],
  likeCount: {
    default: 0,
    type: Number,
  },
  cover: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
