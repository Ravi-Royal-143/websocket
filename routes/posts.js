const express = require("express");

const { createPost, getPosts } = require("../Controller/posts");

// const checkAuth = require("../middleWare/check-auth");
const extractFile = require("../middleWare/extract-file");

const router = express.Router();

router.post("", extractFile, createPost);

router.get("", getPosts);

module.exports = router;
