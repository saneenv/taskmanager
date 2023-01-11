const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

// load in the mongoose models
const { List, Task } = require('./db/models');

// load middleware
app.use(bodyParser.json());

// ROUTE HANDLERS

// LISTS ROUTES

// *Get/lists 
// *purpose:Get all lists
  
  
app.get('/lists', (req, res) => {
    // we want to return an array of all the lists in the database
    List.find({}).then((lists) =>{
        res.send(lists);
    }); 
})

// *POST /lists
// *purpose: Create a list

app.post('/lists', (req, res) => {
    // we want to create a new list and return the new list document back to the user (which includes the id)
    // the list information (fields) will be passed via the json request body
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        // the full list document is returned (incl. id)
        res.send(listDoc);
    })
});

// *PATH /lists/:id
// *purpose: update a specified list

app.patch('/lists/:id', (req, res) => {
    // we want to update the specified list (list document with id in the url) with the new values specified in the json body of the request
});

// DELETE /lists/:id
// purpose: Delete a list

app.delete('/lists/:id', (req, res) => {
    // we want to delete the specifeid list(document with id in the url)
});

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});