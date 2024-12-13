import mongoose from 'mongoose';


export const PostSchema = new mongoose.Schema({
    title: String,
    body : String,
});

export const Post = mongoose.model('Post', PostSchema);