USE EMarket;


SELECT 
    Clientes.ClienteID, Clientes.Titulo, Faturas.DataFatura
FROM
    Clientes
        INNER JOIN
    Faturas ON Clientes.ClienteID = Faturas.ClienteID;
    
SELECT 
    Clientes.ClienteID, Clientes.Titulo, Faturas.DataFatura
FROM
    Clientes
        INNER JOIN
    Faturas ON Clientes.ClienteID = Faturas.ClienteID;

SELECT 
    Clientes.Titulo, COUNT(Faturas.DataFatura)
FROM
    Clientes
        INNER JOIN
    Faturas ON Clientes.ClienteID = Faturas.ClienteID
GROUP BY Clientes.Titulo;


