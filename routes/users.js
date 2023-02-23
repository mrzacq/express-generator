var express = require("express");
const { checkBody } = require("../middlewares");
var router = express.Router();

// routenya = "/users"
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/:username", function (req, res, next) {
  res.json({ data: req.params });
});

router.post("/", checkBody, (req, res) => {
  res.json({ msg: "create user", data: req.body });
});

module.exports = router;
