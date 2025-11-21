var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.get("/quiz", function (req, res) {
    quizController.quiz(req, res)
});



module.exports = router;