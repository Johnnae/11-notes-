const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// GET Route for retrieving all the tips
router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data)=>{
    if (err) throw err

    return res.json(JSON.parse(data))
  })
  
});

// POST Route, defines post request
router.post("/api/notes", (req, res) => {
  

 const dbData= JSON.parse(fs.readFileSync("db/db.json"))

 const newNote= req.body;
 newNote.id= uuidv4()

 dbData.push(newNote)

 fs.writeFileSync("db/db.json", JSON.stringify(dbData))
res.json(dbData)
 
});

router.delete("/api/notes/:id", (req, res)=>{
  const dbData= JSON.parse(fs.readFileSync("db/db.json"))

  const removeNote= dbData.filter((note)=>note.id !== req.params.id);

  fs.writeFileSync("db/db.json", JSON.stringify(removeNote))
  res.json(removeNote)
})

module.exports = router;
