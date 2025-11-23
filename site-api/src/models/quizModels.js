var database = require("../database/config")

function buscarPerguntas(idFormulario) {
    var instrucaoSql = `
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
    console.log("Executando a instrução SQL de BUSCA: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function quiz(id_Usuario, id_Formulario, pontuacao) {
    var instrucaoSql = `
        INSERT INTO usuario_formulario (fk_Usuario, fk_Formulario, pontuacao, data_realizacao) 
        VALUES ('${id_Usuario}', '${id_Formulario}', '${pontuacao}', NOW())
    `
    console.log("Executando a instrução SQL de INSERÇÃO: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarResultados(idUsuario) {
    var instrucaoSql = `
        SELECT pontuacao, data_realizacao
        FROM usuario_formulario
        WHERE fk_Usuario = ${idUsuario}
    `
    console.log("Executando a instrução SQL de LEITURA (Teste): \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}
module.exports = {
    buscarPerguntas,
    quiz,
    listarResultados
}