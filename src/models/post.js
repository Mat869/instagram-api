const mongoose = require('mongoose');

const Post = new mongoose.model('Post', {
	userId: {
		type: ObjectId,
        required: true,
    },
    description: String,
	image: {
        type: String,
        required: true
    },
    likes: [ObjectId],
	createdAt: {
		type: Date,
		default: () => new Date()
    }

});

module.exports = Post;