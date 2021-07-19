// POST HAS id: title: contents: user_id:
  
const { Post } = require('../models');

const postData = [
    {
        id: 1,
        title: 'this is title 1',
        contents: 'The nose of the wine offers aromas of black cherry and blackberry along with underlying floral nuances. The texture is soft, yet the wine maintains wonderful structure. This is a versatile wine that will accompany a wide array of dishes.',
        created_at: new Date(),
    },
    {
        id: 2,
        title: 'this is title 2',
        contents: 'Lorem ipsum',
        created_at: new Date(),
    },
    
]
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
