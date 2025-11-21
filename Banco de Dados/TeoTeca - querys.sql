CREATE DATABASE teoteca;
USE teoteca;

CREATE TABLE usuario 
(id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80),
email VARCHAR(255),
senha VARCHAR(255)
);

SELECT * from usuario;

CREATE TABLE formulario 
(id_Formulario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80),
descricao VARCHAR(255));

CREATE TABLE usuario_formulario
(id_RespostaForm INT,
id_Usuario INT,
id_Formulario INT,
pontuacao VARCHAR(50),
PRIMARY KEY (id_RespostaForm, id_Usuario, id_Formulario),
	CONSTRAINT fk_Resposta_UsuarioForm
        FOREIGN KEY (id_Usuario)
        REFERENCES usuario(id_Usuario),
        FOREIGN KEY (id_Formulario)
        REFERENCES formulario(id_Formulario)
);

select * from usuario_formulario;

CREATE TABLE pergunta (
    id_Pergunta INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(255),
    fk_Formulario INT, 
    CONSTRAINT fk_Pergunta_Formulario 
        FOREIGN KEY (fk_Formulario)
        REFERENCES formulario(id_Formulario)
);

CREATE TABLE resposta (
id_Resposta INT AUTO_INCREMENT,
opcao CHAR(1),
descricao VARCHAR(255),
validacao TINYINT,
fk_Pergunta INT,
CONSTRAINT fk_PerguntaResposta
	FOREIGN KEY (fk_Resposta)
		REFERENCES pergunta(id_Pergunta),
PRIMARY KEY (id_Resposta, fk_Pergunta)
);

	




