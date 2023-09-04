const express = require("express");
const app = express();
const port = 3001;
// Static post data
const posts = [
  {
    id: 1,
    title: "Post 1",
    body: "This is the first post.",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000
  }, // 2 days ago
  {
    id: 2,
    title: "Post 2",
    body: "This is the second post.",
    createdAt: Date.now() - 60 * 60 * 1000
  } // 1 hour ago
];

app.use(express.json());

app.get("/posts", (req, res) => {
  // Simulate a delay to mimic a real API request
  setTimeout(() => {
    res.json(posts);
  }, 1000); // Respond after 1 second
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
