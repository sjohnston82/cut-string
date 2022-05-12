const express = require("express");
const router = express.Router();
const cors = require("cors");
const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

router.post("/test", (req, res) => {
  let stringToCut = req.body.text;
  let cutString = [];

  const stripped = stringToCut.replace(/\s+/g, "").split("");

  for (let i = 2; i < stripped.length; i += 3) {
    cutString.push(stripped[i]);
  }

  let result = cutString.join("").toUpperCase();

  return res.status(200).json(result);
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
