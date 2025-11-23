var express = require("express")
var router = express.Router()

var quizController = require("../controllers/quizController")

router.get("/perguntas/:idFormulario", function (req, res) {
    quizController.buscarPerguntas(req, res)
})

router.get("/listar/:idUsuario", function (req, res) {
    quizController.listarResultados(req, res)
})

router.post("/quiz", function (req, res) {
    quizController.quiz(req, res)
})

module.exports = router