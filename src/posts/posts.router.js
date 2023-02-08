const postServices = require("./posts.services");

const router = require("express").Router();

router.get("/posts", postServices.findAllPosts);

router.get("/posts/:id", postServices.findPostById);

router.post("/posts", postServices.createPost);

router.put("/posts/:id", postServices.updatePost);

router.delete("/posts/:id", postServices.deletePost);

module.exports = router;
