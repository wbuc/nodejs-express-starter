// IMPORTS
const express = require("express");
const app = express();

app.use(express.json());

// MAGIC START ***

// GET
app.get("/fileroom", (req, res, next) => {
  res.send("Done GET!");
});

// GET:id
app.get("/fileroom/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).send(`Received ${id}!`);
});

// PUT
app.put("/fileroom/:id", (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  res.status(200).json({ id, data });
});

// POST
app.post("/fileroom", (req, res, next) => {
  const data = req.body;
  res.status(200).json({ message: "Save done!", data });
});

// Helper functions
const isValidId = (req, res, next)=>{
  const id = req.params.id;
  res.locals.isValid = id > 10 ? true : false;
  next();
}
const sendIdResult = (req, res, next)=>{
  res.send(res.locals.isValid);
}

// DELETE
app.delete(
  "/fileroom/:id",
  isValidId,
  sendIdResult
);

// MAGIC END ***

// CONFIG
const port = 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
