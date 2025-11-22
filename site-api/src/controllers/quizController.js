var quizModel = require("../models/quizModels");

function quiz(req, res) {
    var id_Usuario = req.body.id_Usuario;
    var id_Formulario = req.body.id_Formulario;
    var pontuacao = req.body.pontuacao;

    if (id_Usuario == undefined || id_Formulario == undefined || pontuacao == undefined) {
        res.status(400).send("Faltam dados para salvar o resultado.");
    } else {
        quizModel.quiz(id_Usuario, id_Formulario, pontuacao)
            .then(function (resultado) {
                res.status(200).json({
                    mensagem: "Resultado salvo com sucesso!",
                    dados: resultado
                });
            })
            .catch(function (erro) {
                console.log("Erro ao salvar resultado:", erro);
                res.status(500).json(erro);
            });
    }
}

module.exports = {
    quiz
};