// const Post = require("../model/post");

exports.createPost = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  // const post = new Post({
  //   title: req.body.title,
  //   content: req.body.content,
  //   imagePath: url + "/images/" + req.file.filename,
  //   creator: req.userData.userId
  // });
  console.log("url", url)
  // post
  //   .save()
  //   .then(createdPost => {
  res.status(201).json({
    message: "Post added successfully",
    // post: {
    //   ...createdPost,
    //   id: createdPost._id
    // }
  });
      // })
  //     .catch (error => {
  //   console.log(error)
  //   res.status(500).json({
  //     message: "Creating a post failed!"
  //   });
  // });
};

exports.getPosts = (req, res, next) => {

  // const postQuery = Post.find();
  // let fetchedPosts;

  // postQuery
  //   .then(documents => {
  //     fetchedPosts = documents;
  //     return Post.count();
  //   })
  //   .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: [],
        maxPosts: 1
      });
    // })
    // .catch(error => {
    //   res.status(500).json({
    //     message: "Fetching posts failed!"
    //   });
    // });
};