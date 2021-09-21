use EMarket;

/*
1) Empregados

Crie uma SP que liste os sobrenomes e nomes dos empregados, ordenados alfabeticamente.
Invoque a SP para verificar o resultado.
*/

delimiter $$

create procedure empregados_dados()
begin
select Nome, EmpregadoID
from Empregados
order by Nome asc;
end $$

delimiter ;

call empregados_dados;

/*
2) Empregados por cidade

Crie uma SP que leva o nome de uma cidade e lista os funcionários dessa cidade
Invoque a SP para listar os empregados de Seattle.
*/

DELIMITER $$

CREATE PROCEDURE cidade_empregado (IN city VARCHAR (50), OUT func VARCHAR(50))
BEGIN 
	SELECT Nome
    FROM empregados 
    WHERE Cidade = city;
END $$

DELIMITER ;

CALL cidade_empregado('Kirkland', @func);

/*
3) Clientes por país

Crie uma SP que recebe o nome de um país e retorne o número de clientes naquele país.
Invoque a SP para consultar a quantidade de clientes de Portugal.
*/


delimiter $$

create procedure cliente_pais(in nome varchar(50), out numero INT)
begin
select count(*) into numero
from Clientes
where Pais = nome;
end $$

delimiter ;

call cliente_pais("Brazil", @numero);

/*
4) Produtos sem estoque

Crie uma SP que receba um número e liste os produtos cujo estoque está abaixo desse número. 
O resultado deve mostrar o nome do produto, o Estoque atual e o nome da categoria à qual o produto pertence.
Liste os produtos com menos de 10 unidades no estoque;
Liste os produtos sem estoque.
*/

delimiter $$

create procedure produtos_qtd(in num INT, out qtd INT)
begin
select ProdutoNome, UnidadesEstoque, CategoriaID
from Produtos
where UnidadesEstoque <= num;
end $$

delimiter ;

call produtos_qtd(10, @qtd);

/*
5) Vendas com desconto

Crie uma SP que receba uma porcentagem e lista os nomes dos produtos que foram vendidos com desconto igual 
ou superior ao valor indicado, indicando, também,  o nome do cliente a quem foi vendido.
Liste as informações dos produtos que foram vendidos com um desconto superior a 10%.
*/

DELIMITER $$
DROP PROCEDURE IF EXISTS lista_produtos;
CREATE PROCEDURE lista_produtos(IN porcentagem DOUBLE, OUT listaProdutos VARCHAR(50))
BEGIN
	SELECT produtos.ProdutoNome, detalhefatura.Desconto, faturas.NomeEnvio AS "Nome do cliente"
    FROM detalhefatura
    INNER JOIN produtos
    ON detalhefatura.ProdutoID = produtos.ProdutoID
    INNER JOIN faturas
    ON detalhefatura.FaturaId = faturas.FaturaId
    WHERE detalhefatura.Desconto >= porcentagem;
END
$$
DELIMITER ;

CALL lista_produtos(0.15, @listaProdutos);