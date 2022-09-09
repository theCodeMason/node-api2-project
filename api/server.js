const express = require('express');

const server = express();

server.use(express.json());

const postsRouter = require('./posts/posts-router');

server.use('/api/posts', postsRouter)

module.exports = server;// implement your server here
