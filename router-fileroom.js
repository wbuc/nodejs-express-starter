const express = require("express");
const router = express.Router();

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
  res.send("Done GET!");
});

//GET:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).send(`Received ${id}!`);
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
  res.status(200).json({ message: "Save done!", data });
});

//DELETE
router.delete("/:id", isValidId, sendIdResult);



module.exports = router;
