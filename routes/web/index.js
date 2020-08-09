var express = require("express");

var router = express.Router();

// Add in Error and info

router.use("/" ,require("./home"));


module.exports = router;