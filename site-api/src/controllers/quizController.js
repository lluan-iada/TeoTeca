var quizModels = require("../models/quizModels")

function buscarPerguntas(req, res) {
    var idFormulario = req.params.idFormulario

    quizModels.buscarPerguntas(idFormulario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(204).send("Nenhuma pergunta encontrada!")
            }
        }).catch(function (erro) {
            console.log(erro)
            console.log("Houve um erro ao buscar as perguntas: ", erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}

function quiz(req, res) {
    var id_Usuario = req.body.id_Usuario
    var id_Formulario = req.body.id_Formulario
    var pontuacao = req.body.pontuacao

    if (id_Usuario == undefined || id_Formulario == undefined || pontuacao == undefined) {
        res.status(400).send("Faltam dados para salvar o resultado.")
    } else {
        quizModels.quiz(id_Usuario, id_Formulario, pontuacao)
            .then(function (resultado) {
                res.status(200).json({
                    mensagem: "Resultado salvo com sucesso!",
                    dados: resultado
                })
            })
            .catch(function (erro) {
                console.log("Erro ao salvar resultado:", erro)
                res.status(500).json(erro)
            })
    }
}

function listarResultados(req, res) {
    var idUsuario = req.params.idUsuario

    quizModels.listarResultados(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro)
            console.log("Houve um erro ao buscar os resultados: ", erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}

module.exports = {
    buscarPerguntas,
    quiz,
    listarResultados
}