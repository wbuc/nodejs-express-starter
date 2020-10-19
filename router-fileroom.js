const { response } = require("express");
const express = require("express");
const router = express.Router();

const fs = require("fs");

/# MIDDLEWARE #/;

const isValidId = (req, res, next) => {
  const id = req.params.id;
  res.locals.isValid = id > 10 ? true : false;
  next();
};
const sendIdResult = (req, res, next) => {
  res.send(res.locals.isValid);
};

/# MIDDLEWARE END #/;

//GET
router.get("/", (req, res, next) => {
  try {
    const jsonString = fs.readFileSync("./fileroom.json", "utf-8"); // load the data
    const data = JSON.parse(jsonString); // parse to JSON
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send("Could not load the data: ", err);
  }
});

//GET:id
router.get("/:id", (req, res, next) => {
  const id = Number.parseInt(req.params.id);
  try {
    const jsonString = fs.readFileSync("./fileroom.json", "utf-8"); // load the data
    const filerooms = JSON.parse(jsonString); // parse to JSON

    let response;
    for (var room of filerooms) {
      if (room.id === id) response = room;
    }

    res.status(200).json({ ...response });
  } catch (err) {
    res.status(500).send(`Error : ${err}`);
  }
});

//PUT:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  res.status(200).json({ id, data });
});

//POST
router.post("/", (req, res, next) => {
  const data = req.body;

  // Read data
  const jsonString = fs.readFileSync("./fileroom.json", "utf-8"); // load the data
  const jsonArray = JSON.parse(jsonString); // parse to JSON
  
  // Prep data
  data.id = Math.floor(Math.random() * 100 + 1); // assign random dummy ID between 1 - 100.
  jsonArray.push(data);

  // Save data
  fs.writeFile('./fileroom.json', JSON.stringify(jsonArray, null, 2), err=>{
    if(err)console.log(err);
  })

  res.status(200).json({ message: "Fileroom saved!", data });
});

//DELETE
router.delete("/:id", isValidId, sendIdResult);

module.exports = router;
