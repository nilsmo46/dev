const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();
app.use(cors());

app.get("/deploy", (req, res) => {
  console.log(req.query.value);
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send("In Deploy");
  const op = spawn("sh", ["deploy.sh"], { search: req.query.value });
  op.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });

  op.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
  });

  op.on("error", err => {
    console.log(`Failed to start: ${err}`);
  });
});

app.listen(3001, () => {
  console.log("Server Up");
});
