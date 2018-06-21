const http = new easyHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Create Data

const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Crate post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// })

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// })

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/5', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response)
  }
})