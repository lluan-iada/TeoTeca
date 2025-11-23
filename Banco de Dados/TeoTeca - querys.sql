CREATE DATABASE teoteca;
USE teoteca;

CREATE TABLE usuario (
	id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(80) NOT NULL,
	email VARCHAR(255) NOT NULL,
	senha VARCHAR(255) NOT NULL
);

select * from usuario;

CREATE TABLE formulario (
	id_Formulario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(80),
	descricao VARCHAR(255)
);

CREATE TABLE usuario_formulario (
	fk_Usuario INT,
	fk_Formulario INT,
	pontuacao INT,
	data_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (fk_Usuario, fk_Formulario, data_realizacao),
		CONSTRAINT fk_Historico_Usuario 
        FOREIGN KEY (fk_Usuario)
			REFERENCES usuario(id_Usuario),
		CONSTRAINT fk_Historico_Formulario 
        FOREIGN KEY (fk_Formulario)
			REFERENCES formulario(id_Formulario)
);

select * from usuario_formulario;

CREATE TABLE pergunta (
	id_Pergunta INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(255),
	alternativaA VARCHAR(255),
	alternativaB VARCHAR(255),
	alternativaC VARCHAR(255),
	alternativaD VARCHAR(255),
	correta VARCHAR(50),
	fk_Formulario INT,
    CONSTRAINT fk_Pergunta_Formulario 
		FOREIGN KEY (fk_Formulario) 
        REFERENCES formulario(id_Formulario)
);

CREATE TABLE resposta (
	id_Resposta INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(255),
	fk_Pergunta INT,
	validacao TINYINT(1),
	CONSTRAINT fk_Resposta_Pergunta 
		FOREIGN KEY (fk_Pergunta) 
        REFERENCES pergunta(id_Pergunta)
);

INSERT INTO formulario (nome, descricao) VALUES ('As bases da Teologia Reformada', 'Quiz geral da História da Igreja');

INSERT INTO pergunta (descricao, alternativaA, alternativaB, alternativaC, alternativaD, correta, fk_Formulario) VALUES 
('O que significa a palavra grega Didaqué?', 'Os Dez Mandamentos', 'Instrução ou Doutrina', 'A Vida dos Apóstolos', 'O Novo Testamento', 'alternativaB', 1),
('O Didaqué é considerado um guia prático para qual aspecto da vida cristã primitiva?', 'A construção de grandes templos', 'A filosofia grega e romana', 'A vida comunitária, o batismo e a ceia', 'A política do Império Romano', 'alternativaC', 1),
('Qual obra famosa de Agostinho narra sua dramática conversão ao cristianismo?', 'A Cidade de Deus', 'Suma Teológica', 'Confissões', 'As 95 Teses', 'alternativaC', 1),
('Agostinho de Hipona foi fundamental no desenvolvimento de qual doutrina teológica?', 'A doutrina da Graça', 'A teologia da prosperidade', 'A infalibilidade papal', 'O batismo infantil obrigatório', 'alternativaA', 1),
('Qual evento ocorrido em 1517 é considerado o estopim da Reforma Protestante?', 'A tradução da Bíblia para o alemão', 'A fixação das 95 Teses por Martinho Lutero', 'O Concílio de Trento', 'A fundação da Igreja Anglicana', 'alternativaB', 1),
('Qual era a principal crítica de Lutero nas 95 Teses?', 'O celibato dos padres', 'A venda de indulgências', 'O uso de imagens nas igrejas', 'A liturgia em latim', 'alternativaB', 1);