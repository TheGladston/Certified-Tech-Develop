USE filmes_db;

-- Mostrar título de todas as séries e use alias para que o nome do campo fique em português.

SELECT titulo as TITULO FROM series;

-- Busque por título de filmes com classificação superior a 3, com mais de 1 prêmio e com data de lançamentos entre
-- 01/01/1988 e 31/12/2009.
-- Classifique os resultados em ordem decrescente

SELECT titulo, avaliacao FROM filmes
WHERE avaliacao > 3 and premios > 1 and data_lancamento BETWEEN '1988-01-01' and '2009/12/31'
ORDER BY avaliacao desc;

-- Fazer um top 3 com os filmes a partir do 10 registro da consulta anterior.

SELECT titulo FROM filmes
WHERE avaliacao > 3 and premios > 1 and data_lancamento BETWEEN '1988-01-01' and '2009/12/31'
ORDER BY avaliacao desc
LIMIT 3
OFFSET 10;

-- Quais são os 3 piores episódios considerando suas classificações?

SELECT titulo, avaliacao FROM episodios
ORDER BY avaliacao
LIMIT 3;

-- Liste nome, sobrenome e avaliacao da tabela de Atores.
-- Utilize Alias para mostrar o título das colunas com a letra maiúscula.
-- Substitua o nome da coluna id por Identificação e da coluna avaliação por Classificação.

SELECT id AS Identificação, nome AS Nome,  sobrenome AS Sobrenome, avaliacao AS Classificação FROM atores;
