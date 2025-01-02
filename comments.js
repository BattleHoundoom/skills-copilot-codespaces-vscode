//create web server
const express = require('express');
const app = express();
const port = 3000;

//importing the comments module
const comments = require('./comments');

//get request for the home page
app.get('/', (req, res) => {
  res.send('Home Page');
});

//get request for the comments page
app.get('/comments', (req, res) => {
  res.send(comments.comments);
});

//get request for a specific comment
app.get('/comments/:id', (req, res) => {
  //get the id from the request
  const id = req.params.id;
  //get the comment with the specified id
  const comment = comments.comments.find((comment) => {
    return comment.id === parseInt(id);
  });
  //if the comment is not found
  if (!comment) {
    res.status(404).send('Comment not found');
  } else {
    //if the comment is found
    res.send(comment);
  }
});

//start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
                    