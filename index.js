const morgan = require("morgan");
const express = require("express");
const app = express();
app.use(morgan("combined"));

app.get("/users/:name", (req, res) => {
   res.send({ auth: `Mr. ${req.params["name"]}` });
});

const PORT = 3001;

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});
