const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", async (req,res) => {
  //Write your code here
  try {
    let {username,password} = req.body
  if (users.length===0){
    users.push({username:username,password:password});
    res.status(200).send("Successfully Registered")
  }
  } catch (error) {
    res.status(400).send(error)
  }
  

  for (let i = 0; i < users.length; i++) {
    if (users[i].username===username) res.status(400).send("User already exists")
    else {users.push({username:username, password:password})
  res.status(200).send("Successfully Registered")}
  }
  console.log(users)

  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',async function (req, res) {
  //Write your code here
  try {
   res.status(200).send(books)
  } catch (error) {
    res.status(400).send(error)
  }
  
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', async function (req, res) {
  //Write your code here
  try {
    let isbn= req.params.isbn
  res.status(200).send(books[isbn])
  } catch (error) {
    res.status(400).send(error)
  }
  
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here

  let keys= Object.keys(books) // get total keys from books object.
  let result=[]
  for (let i=0; i<keys.length; i++){
    if (books[keys[i]].author === req.params.author){
      
      result.push(books[i+1])

    }
  }
  res.status(200).send(result)
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title', async function (req, res) {
  //Write your code here

  try {
    let keys= Object.keys(books)
    let result=[]
    for (let i=0; i<keys.length; i++){
      if (books[keys[i]].title === req.params.title){
        
        result.push(books[i+1])
  
      }
    }
    res.status(200).send(result)
    
  } catch (error) {
    res.status(400).send(error)
  }


  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here

  let isbn= req.params.isbn
  res.status(200).send(books[isbn].reviews)
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
