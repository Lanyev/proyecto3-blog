const postControllers = require("./posts.controllers");

const findAllPosts = async (req, res) => {
    postControllers
        .findAllPosts()
        .then((post) => {
            res.status(200).json(post);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const findPostById = async (req, res) => {
    const id = req.params.id;
    postControllers
        .findPostById(id)
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            }
            res.status(404).json({ message: "Post not found" });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const createPost = (post) => {
    const postObj = req.body;
    postControllers
        .createPost(postObj)
        .then((post) => {
            res.status(200).json(post);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const updatePost = async (req, res) => {
    const id = req.params.id;
    const postObj = req.body;
    postControllers
        .updatePost(id, postObj)
        .then((post) => {
            if (post[0] === 1) {
                res.status(200).json({ message: "Post updated" });
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const deletePost = async (req, res) => {
    const id = req.params.id;
    postControllers
        .deletePost(id)
        .then((post) => {
            if (post === 1) {
                res.status(200).json({ message: "Post deleted" });
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost,
};
