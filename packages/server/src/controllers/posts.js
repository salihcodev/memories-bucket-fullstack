import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
  try {
    const PostMessages = await PostMessage.find();
    res.status(200).json(PostMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const postToUpdate = req.body;

    mongoose.Types.ObjectId.isValid(_id)
      ? res.status(404).send('No post with that ID')
      : null;

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, postToUpdate, {
      new: true,
    });

    res.json(updatedPost);
  } catch (error) {
    console.error(error);
  }
};
