const Router = require('express').Router();
const fs = require ("fs");
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the tips
Router.get('/api/notes', async (req, res) => { 
  const dbjson = await JSON.parse
  fs.readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route, defines post request
Router.post('/api/notes', (req, res) => {
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newNote = {
      title,
      body,
      topic,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`note added successfully`);
  } else {
    res.error('Error in adding notes');
  }
});

module.exports = Router;
