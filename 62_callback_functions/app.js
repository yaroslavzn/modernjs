const posts = [
  {title: 'Post One'},
  {title: 'Post Two'}
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000)
// }

// function getPosts() {
  
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<p>${post.title}</p>`
//     })

//     document.body.innerHTML = output;
//   }, 1000)
// }

// createPost({title: 'Post Three'});
// getPosts();

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000)
  
}

function getPosts() {
  
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<p>${post.title}</p>`
    })

    document.body.innerHTML = output;
  }, 1000)
}

createPost({title: 'Post Three'}, getPosts);