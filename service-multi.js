// IMPORTS
const express = require("express");
const app = express();

// ROUTES
const fileroomRoutes = require('./router-fileroom');

app.use(express.json());

// MAGIC START ***

app.use('/fileroom', fileroomRoutes);

// MAGIC END ***

// CONFIG
const port = 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
