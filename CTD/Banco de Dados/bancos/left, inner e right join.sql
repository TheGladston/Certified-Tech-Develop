use EMarket;

/*
- Alfredo
- Gladston
- Kantuta
- Polyana
- Wirley
*/

SELECT 
    c.Contato, f.DataFatura, co.Empresa
FROM
    Clientes c
        INNER JOIN
    Faturas f ON c.ClienteID = f.ClienteID
        INNER JOIN
    Correios co ON f.FormaEnvio = co.CorreioID;
    

/*
Faça uma consulta sobre o faturamento do e-market. Inclua as seguintes informações:
- ID da fatura
- data da fatura
- nome da empresa de correio (O id da empresa consta da tabela faturas no campo FormaEnvio)
- nome do cliente
- categoria do produto vendido
- nome do produto(Você chega ao produto consultando os detalhes da fatura)
- preço unitário
- quantidade
*/

SELECT 
    f.FaturaID,
    f.DataFatura,
    f.FormaEnvio,
    c.Contato,
    ca.CategoriaNome,
    p.ProdutoNome,
    d.ProdutoID,
    d.PrecoUnitario,
    d.Quantidade
FROM
    Clientes c
        INNER JOIN
    Faturas f ON c.ClienteID = f.ClienteID
        INNER JOIN
    DetalheFatura d ON f.FaturaID = d.FaturaID
        INNER JOIN
    Categorias ca
        INNER JOIN
    Produtos p ON ca.CategoriaID = p.CategoriaID;

/*
Liste todas as categorias junto com informações sobre seus produtos. 
Incluir todas as categorias, mesmo que não tenham produtos.
*/

SELECT 
    c.CategoriaID AS 'ID',
    c.CategoriaNome AS 'Nome da Categoria',
    c.Descricao,
    p.ProdutoNome AS 'Nome do Produto',
    p.UnidadesEstoque AS 'Unidades em Estoque'
FROM
    Categorias c
        LEFT JOIN
    Produtos p ON c.CategoriaID = p.CategoriaID;

/*
Liste as informações de contato de clientes que nunca compraram no emarket.
*/

SELECT 
    c.Contato, f.DataFatura
FROM
    Clientes c
        LEFT JOIN
    Faturas f ON c.ClienteID = f.ClienteID
WHERE
    f.ClienteID IS NULL;
    
/*
Faça uma lista de produtos. Para cada um, indique seu nome, categoria e as informações de contato de seu fornecedor. 
Lembre-se que podem existir produtos para os quais o fornecedor não foi indicado.
*/

SELECT 
    p.ProdutoNome, c.CategoriaNome, co.Contato
FROM
    produtos p
        LEFT JOIN
    categorias c ON p.CategoriaID = c.CategoriaID
        LEFT JOIN
    provedores co ON p.ProvedorID = co.ProvedorID;

/*
Para cada categoria, liste o preço unitário médio de seus produtos.
*/

SELECT 
    c.CategoriaNome, round(AVG(p.PrecoUnitario), 2) AS 'Preço Médio'
FROM
    categorias c
        LEFT JOIN
    produtos p ON c.CategoriaID = p.CategoriaID
GROUP BY CategoriaNome;

/*
Para cada cliente, indique a última nota fiscal de compra. 
Inclua clientes que nunca compraram no e-market.
*/

SELECT 
    c.Empresa, MAX(f.DataFatura) AS "Última NF"
FROM
    clientes c
        LEFT JOIN
    faturas f ON c.ClienteID = f.ClienteID
GROUP BY c.Empresa;

/*
Todas as faturas têm uma empresa de correio associada (envio). 
Gere uma lista com todas as empresas de correio e o número de faturas correspondentes. 
Execute a consulta usando RIGHT JOIN.
*/

SELECT 
    c.empresa AS 'Empresas', COUNT(f.FaturaID) AS 'Faturas'
FROM
    faturas f
        RIGHT JOIN
    correios c ON f.formaenvio = c.CorreioID
GROUP BY c.empresa;