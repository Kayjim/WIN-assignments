const request = require('request-promise');

module.exports = {
    getPost(postId) {
        request({uri: `http://jsonplaceholder.typicode.com/posts/${postId}`, json: true})
            .then(res => console.log(res));
    }
};