const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  const {username,password}= req.body;
console.log(users)
  const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, "asidhjajusidha");
        res.json({
          accessToken
      });
  } else {
      res.send('Username or password incorrect');
  }
  return res.status(300).json({message: "Yet to be implemented"});
}
);

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here

  console.log(books[1])
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
