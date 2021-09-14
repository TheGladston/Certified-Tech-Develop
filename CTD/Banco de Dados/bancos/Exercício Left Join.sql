USE EMarket;

-- 1. Liste os clientes que fizeram compras durante 1996.
-- A lista deve conter as seguintes colunas:
-- Nome e sobrenome. 
-- O título é todo maiúsculo.

SELECT DISTINCT 
    Clientes.contato AS 'Nome e Sobrenome',
    UPPER(Clientes.Titulo),
    Faturas.DataFatura
FROM
    Clientes
        INNER JOIN
    Faturas ON Clientes.ClienteID = Faturas.ClienteID
WHERE
    Faturas.DataFatura BETWEEN '1996-01-01' AND '1996-12-31';
    
-- ou

SELECT DISTINCT 
    Clientes.contato AS 'Nome e Sobrenome',
    UPPER(Clientes.Titulo),
    Faturas.DataFatura
FROM
    Clientes
        INNER JOIN
    Faturas ON Clientes.ClienteID = Faturas.ClienteID
WHERE YEAR
	(faturas.DataFatura) = 1996;

-- 2. Liste as faturas para as quais a remessa foi para uma cidade diferente da cidade do cliente. 
-- Considere apenas os clientes do Reino Unido.
-- A listagem deve incluir:
-- O número da fatura completando com zeros principais 8 itens. Por exemplo, 00001234
-- A data da fatura no formato YYYY-MM-DD. Por exemplo, 1996-12-01
-- Para a cidade do cliente

SELECT 
    Clientes.Cidade,
    RIGHT(CONCAT('000', Faturas.FaturaID),
        8) as "ID", date_format(Faturas.DataFatura, "%Y-%m-%d") as "Data Fatura"
FROM
    Clientes
        INNER JOIN
    Faturas ON Clientes.ClienteID = Faturas.ClienteID
WHERE
    Clientes.Cidade <> Faturas.CidadeEnvio
        AND Clientes.Pais = 'UK';
        
        
 -- ###################################################################       
        
-- CONSULTAS MESA DE TRABALHO

-- MESA 02
	-- Paulo Rossi
    -- Lays Maiara
    -- Pedro Soares
    -- Gladston de Paula
    -- Marco Thúlio

-- 1. Para cada empresa de correio, calcule o transporte total. 
-- Inclua todas as empresas de correio, mesmo que não tenham realizado nenhuma operação.

SELECT 
    Correios.Empresa, Faturas.Transporte
FROM
    Correios
        LEFT JOIN
    Faturas ON Correios.CorreioID = Faturas.FormaEnvio;

-- 2. Liste as informações de contato (ou, endereço, etc.) dos clientes que não fizeram compras. 
-- Exiba as informações no formato considerado mais adequado. Por exemplo: <endereço> (CP: < CEP>) 

SELECT 
    Clientes.Contato, Faturas.DataFatura
FROM
    Clientes
        LEFT JOIN
    Faturas ON Clientes.ClienteID = Faturas.ClienteID
WHERE
    Faturas.ClienteID IS NULL;

-- 3. Liste as categorias e seus produtos, incluindo as categorias para as quais não há produtos no banco de dados.
-- Para nomes de produtos, onde mix ou Chef diz, substituí-lo por MIX ou CHEF, respectivamente. 
-- Por exemplo: Em vez de Filo Mix, coloque Mix Edge.

SELECT 
    Categorias.CategoriaNome,
    REPLACE(REPLACE(Produtos.ProdutoNome,
            'Mix',
            'MIX'),
        'Chef',
        'CHEF') AS ProdutoNome
FROM
    Categorias
        LEFT JOIN
    Produtos ON Categorias.CategoriaID = Produtos.CategoriaID;



