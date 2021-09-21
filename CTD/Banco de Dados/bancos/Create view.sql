USE EMarket;

/*
Crie uma view para que você possa organizar remessas de faturas.  
Indicar número da  fatura,  data da fatura e data de  envio, no formato dd/mm/yy, 
valor de  transporte  formatado em dois locais decimais e informações de endereço de destino, 
incluindo endereço, cidade,  código postal e país, em uma coluna chamada Destino.
*/

CREATE VIEW view_faturas AS
    SELECT 
        FaturaId,
        DATE_FORMAT(DataFatura, '%d/%m/%y') AS 'Data Fatura',
        DATE_FORMAT(DataEnvio, '%d/%m/%y') AS 'Data Envio',
        FORMAT(Transporte, 2) 'Valor Transporte',
        CONCAT(EnderecoEnvio,
                ',',
                CidadeEnvio,
                ',',
                CodigoPostalEnvio,
                ',',
                PaisEnvio) AS 'Destino'
    FROM
        Faturas;
        

SELECT 
    *
FROM
    view_faturas;
    

SELECT 
    `Data Fatura`
FROM
    view_faturas;

/*
Faça uma consulta com todos os empresas de correios e os 
detalhes das  faturas que usaram essa empresa.  
Use  a  View  criada.
*/

SELECT 
    Correios.Empresa, view_faturas.FaturaId
FROM
    Correios
        INNER JOIN
    Faturas ON Correios.CorreioID = Faturas.FormaEnvio
        INNER JOIN
    view_faturas ON Faturas.faturaId = view_faturas.faturaId;
    

/*
 1. Crie uma View com os seguintes dados do cliente: Id, contato, Fax e o telefone.
*/

CREATE VIEW view_dados AS
    SELECT 
        ClienteId, Contato, Fax, Telefone
    FROM
        clientes;

/*
 2. Liste os números de telefone dos clientes que não possuem fax.
Faça isso de duas maneiras diferentes:

a. Consultando a tabela clientes
b. Consultando a view do cliente
*/

SELECT 
    Contato, Fax, Telefone
FROM
    view_dados
WHERE
    Fax = '';
    
SELECT 
    Contato, Fax, Telefone
FROM
    Clientes
WHERE
    Fax = '';

/*
1. Crie uma view com os seguintes dados do fornecedor: Id, contato,
empresa e endereço. Para o endereço, pegue o endereço, cidade, código
postal e país.
*/

CREATE VIEW view_fornecedor AS
    SELECT 
        ProvedorID,
        Contato,
        Empresa,
        CONCAT(Endereco,
                ', ',
                Cidade,
                ', ',
                CodigoPostal,
                ', ',
                Pais) as "Endereco"
    FROM
        Provedores;
        
/*
2. Liste os fornecedores que moram na Avenida das Americanas, no Brasil. Faça de duas formas diferentes:
a. Consultando a tabela de fornecedores
b. Consultando a view do fornecedor
*/

SELECT 
    Contato, Endereco
FROM
    view_fornecedor
WHERE
    Endereco LIKE '%Americanas%'
        AND Endereco LIKE '%Brazil%';
        
SELECT 
    Contato, Endereco, Pais
FROM
    Provedores
WHERE
    Endereco LIKE '%Americanas%'
        AND Pais LIKE '%Brazil%';