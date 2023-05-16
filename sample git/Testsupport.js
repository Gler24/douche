// Store the form element and the posts display area element in variables
const form = document.getElementById("post-form");
const postsContainer = document.getElementById("posts");

// Create an array to store the posts
let posts = [];

// Add an event listener to the form for when it's submitted
form.addEventListener("submit"), (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Get the value of the post text input
  const postText = document.getElementById("post-text").value;
  // Create a new post object with the post text and a timestamp
  const post = { text: postText, timestamp: Date.now() };
  // Add the new post to the posts array
  posts.push(post);
  // Call the displayPosts function to update the posts display area
  displayPosts();
  // Reset the form
}
