var database = require("../database/config")

function buscarPerguntas(idFormulario) {
    var instrucao = `
        SELECT 
            descricao as pergunta, 
            alternativaA, 
            alternativaB, 
            alternativaC, 
            alternativaD, 
            correta as alternativaCorreta
        FROM pergunta
        WHERE fk_Formulario = ${idFormulario}
    `
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function quiz(id_Usuario, id_Formulario, pontuacao) {

    var instrucao = `
        INSERT INTO usuario_has_formulario (fk_Usuario, fk_Formulario, pontuacao, data_realizacao) 
        VALUES ('${id_Usuario}', '${id_Formulario}', '${pontuacao}', NOW())
    `

    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

module.exports = {
    buscarPerguntas,
    quiz
}