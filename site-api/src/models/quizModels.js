var database = require("../database/config");

function quiz(id_Usuario, id_Formulario, pontuacao) {
    var instrucao = `
        INSERT INTO usuario_formulario (id_Usuario, id_Formulario, pontuacao) VALUES (${id_Usuario}, ${id_Formulario}, '${pontuacao}');
    `;

    return database.executar(instrucao);
}

module.exports = {
    quiz
};
