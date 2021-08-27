USE UniversoLeitura;

INSERT INTO autores (nome, sobrenome)
VALUES("MACHADO", "DE ASSIS"),
("JULIO", "VERNE"),
("JOSÉ", "DE ALENCAR");

SELECT * FROM autores;

DELETE FROM autores
WHERE id in(1, 2, 3);

INSERT INTO autores (id, nome, sobrenome)
VALUES(1, "MACHADO", "DE ASSIS");
