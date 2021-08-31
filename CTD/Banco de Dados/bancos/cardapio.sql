CREATE DATABASE cardapio;

USE cardapio;

CREATE TABLE categorias(
	id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(20),
    url_imagem VARCHAR(250),
    PRIMARY KEY(id)
);

CREATE TABLE produtos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20),
    descricao VARCHAR(300),
    imagem VARCHAR(250),
    valor DECIMAL(5,2),
    idcategoria INT,
    FOREIGN KEY(idcategoria) REFERENCES categorias(id)
);

CREATE TABLE clientes(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    sobrenome VARCHAR(100),
    cpf CHAR(11),
    numCel CHAR(15),
    email VARCHAR(150)
);

CREATE TABLE pedidos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quantidade INT,
    precoTotal DECIMAL (7,2),
    idProduto INT,
    idCliente INT,
    FOREIGN KEY(idProduto) REFERENCES produtos(id),
    FOREIGN KEY(idCliente) REFERENCES clientes(id)
);

CREATE TABLE vendas(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data_atual DATE,
    hora_atual TIME,
    total DECIMAL(7,2),
    idPedido INT,
    FOREIGN KEY(idPedido) REFERENCES pedidos(id)
);


INSERT INTO categorias(nome, url_imagem)
VALUES ("Pratos", "https://catracalivre.com.br/wp-content/uploads/2015/09/receita1.jpg"),
("Lanches", "https://uploads.metropoles.com/wp-content/uploads/2020/09/10181250/delicious-beef-burgers-wooden-board_23-2148290634-600x400.jpg"),
("Sobremesas", "https://catracalivre.com.br/wp-content/uploads/2015/09/receita1.jpg"),
("Bebidas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBx23CbIX8dhlyMdL74OTs3eeYuQcXi45NOIShdwyuojOSEny-RLNb0tD8baeQcL512Ek&usqp=CAU");

INSERT INTO categorias(nome, descricao, valor, idcategoria)
VALUES ("REFRI", "MARCA X", 0.99, 4),
("BISCOITO", "MARCA Y", 1.25, 2);