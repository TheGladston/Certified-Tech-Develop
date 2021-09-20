-- Criação do banco de dados.

CREATE DATABASE Biblioteca;

USE Biblioteca;

-- Criação das tabelas com chaves primárias e estrangeiras.

CREATE TABLE Socios(
	idSocios INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Documento CHAR(11),
    Nome VARCHAR(50),
    Sobrenome VARCHAR(100),
    Endereco VARCHAR(50)
);

CREATE TABLE Telefones(
	idTelefones INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	Telefone VARCHAR(100),
    Socio INT,
    foreign key(Socio) references Socios(idSocios)
);

CREATE TABLE Locacoes(
	idLocacoes INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	dataLocacoes DATE,
    dataDevolucao DATE,
    Socio INT,
    foreign key(Socio) references Socios(idSocios)
);

CREATE TABLE Editoras(
	idEditoras INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Telefone VARCHAR(100),
    razaoSocial VARCHAR(100)
);

CREATE TABLE Autores(
	idAutores INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50),
    Sobrenome VARCHAR(100)
);

CREATE TABLE Livros(
	idLivros INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	ISBN VARCHAR(13),
    Titulo VARCHAR(100),
    anoLancamento DATE,
    anoPublicacao DATE,
    Autor INT,
    Editora INT,
    foreign key(Autor) references Autores(idAutores),
    foreign key(Editora) references Editoras(idEditoras)
);

CREATE TABLE Unidades(
	idUnidades INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	Danos TINYINT,
    Livro INT,
    foreign key(Livro) references Livros(idLivros)
);

CREATE TABLE Locacoes_Unidades(
	idLocacoesUnidades INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Locacao INT,
    Livro INT,
    foreign key(Locacao) references Locacoes(idLocacoes),
    foreign key(Livro) references Livros(idLivros)
);

-- Inserção de dados em uma das tabelas.

INSERT INTO Autores (Nome, Sobrenome)
VALUES("DANIEL", "GOLEMAN"),
("GREG", "MCKEOWN"),
("LILIAN", "SOARES");

INSERT INTO Socios (Documento, Nome, Sobrenome, Endereco)
VALUES(06763465610, "GLADSTON", "DE PAULA", "SHCGN 705, BLOCO K, AP 305, ASA NORTE")
;

-- Atualização de dados em uma das tabelas.

UPDATE Socios SET Socios.Documento = 15166348
WHERE idSocios = 1;

-- Exclusão de dados em uma das tabelas.

DELETE FROM Socios
WHERE idSocios = 1;

-- Seleção de dados de uma das tabelas.

SELECT * FROM Autores;

-- Especificar em um parágrafo seu projeto e a utilização e quais suas regras

/* 
BD para gestão de uma pseudo biblioteca, onde realiza-se cadastro de sócios, 
editoras, autores e livros. É possível fazer a gestão de locações, com data de retirada 
e data de devolucão, bem como quantas unidades estão disponíveis e se há danos nos livros.
*/