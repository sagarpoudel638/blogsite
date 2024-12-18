import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments:[
    {
      comment:{type: String, required: true},
      userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
      },
      commentedAT:{type:Date,
        
      }
    }
  ]
});

export const Post = mongoose.model("post", postSchema);

export const getPosts = async () => {
  return await Post.find().populate({
    path: "author",
    select: "-_id",
  });
};

export const getPostById = async (id) => {
  return await Post.findById(id)
    .populate({
      path: "author",
      select: "_id",
    })
    .exec();
};

export const createPost = async (post) => {
  const newPost = new Post(post);
  return await newPost.save();
};

export const updatePost = async (id, post) => {
  const data = await Post.findByIdAndUpdate(
    id,
    {
      $set: post,
    },
    { new: true }
  );

  return data;
};

export const deletePost = async (id) => {
  //console.log("schema",id)
  await Post.findByIdAndDelete(id);
};

export const searchPost = async (query, projection) => {
  // console.log(query,300)
  const data =  await Post.find(query, projection).populate({
    path: "author",
    select: "-_id",
  });
  // console.log(data,200)
   return  data;
};
