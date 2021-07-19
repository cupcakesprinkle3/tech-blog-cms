// COMMENT MODEL HAS id: comment_text: user_id: post_id: 

const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    comment_text: "Ara! Onara suru tsumori datta kedo, unchi ga dechatta.",
    user_id: 1,
    post_id: 1,
  },
  {
    id: 2,
    comment_text: "Koko wa doko? Watashi wa dare? Nani mo wakanai.",
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;