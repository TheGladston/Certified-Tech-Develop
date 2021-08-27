CREATE DATABASE `UniversoLeitura`;
USE `UniversoLeitura`;

CREATE TABLE `associados` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `rg` CHAR(7) NOT NULL,
  `nome` VARCHAR(50) NOT NULL,
  `sobrenome` VARCHAR(50) NOT NULL,
  `endereco` VARCHAR(150) NOT NULL,
  `cidade` VARCHAR(50) NOT NULL,
  `estado` CHAR(2) NOT NULL
);

CREATE TABLE `editoras` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `razao_social` VARCHAR(150) NOT NULL,
  `telefone` VARCHAR(100) NOT NULL
);

CREATE TABLE `autores` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `sobrenome` VARCHAR(150) NOT NULL
);

CREATE TABLE `telefones` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `telefone_socio` VARCHAR(100) NOT NULL,
  `associado_id` INT NOT NULL,
  FOREIGN KEY (`associado_id`) REFERENCES `associados`(`id`)
);

CREATE TABLE `emprestimos` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `data` DATE,
  `prazo_devolucao` DATE,
  `data_devolucao` DATE,
  `associado_id` INT,
  FOREIGN KEY (`associado_id`) REFERENCES `associados`(`id`)
);

CREATE TABLE `livros` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `cod_ISBN` VARCHAR(13),
  `titulo` VARCHAR(200),
  `ano_criacao` DATE,
  `ano_publicacao` DATE,
  `autor_id` INT,
  `editora_id` INT,
  FOREIGN KEY (`autor_id`) REFERENCES `autores`(`id`),
  FOREIGN KEY (`editora_id`) REFERENCES `editoras`(`id`)
);

CREATE TABLE `exemplares` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `sinistro` TINYINT NOT NULL,
  `livro_id` INT NOT NULL,
  FOREIGN KEY (`livro_id`) REFERENCES `livros`(`id`)
);

CREATE TABLE `emprestimo_exemplares` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `emprestimo_id` INT NOT NULL,
  `exemplar_id` INT NOT NULL,
  FOREIGN KEY (`emprestimo_id`) REFERENCES `emprestimos`(`id`),
  FOREIGN KEY (`exemplar_id`) REFERENCES `exemplares`(`id`)
);

