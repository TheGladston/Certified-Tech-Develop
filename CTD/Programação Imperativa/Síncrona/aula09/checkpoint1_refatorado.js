/* - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */


// Informações para o usuário.
console.log("####################################");
console.log("############ MICROONDAS ############");
console.log("#################################### \n");
console.log("1 - Pipoca – 10 segundos (padrão)");
console.log("2 - Macarrão – 8 segundos (padrão)");
console.log("3 - Carne – 15 segundos (padrão)");
console.log("4 - Feijão – 12 segundos (padrão)");
console.log("5 - Brigadeiro – 8 segundos (padrão)\n");
console.log(">>>>>IMPORTANTE<<<<<");
console.log("Informe a opção de preparo pelo número correpondente e o tempo de preparo.")
console.log("INFORME APENAS OPÇÃO DE PREPARO CASO QUEIRA USAR TEMPO PADRÃO!\n\n")

//Declaração das variáveis que guardam o tempo padrão para cada prato.
var pipoca = 10;
var macarrao = 8;
var carne = 15;
var feijao = 12;
var brigadeiro = 8;

//Declaração das variáveis que vão guardar os retornos da função microodas
var opcUser = "";
var tmp = "";
var result = "";

//Função para determinar prato e tempo de preparo
function microondas(opcao, tempo) {
    tmp = tempo;

    switch (opcao) {
        case 1:
            opcUser = "PIPOCA";
            result = pipoca;
            break;
        case 2:
            opcUser = "MACARRÃO";
            result = macarrao;
            break;
        case 3:
            opcUser = "CARNE";
            result = carne;
            break;
        case 4:
            opcUser = "FEIJÃO";
            result = feijao;
            break;
        case 5:
            opcUser = "Brigadeiro";
            result = brigadeiro;
            break;
        default:
            console.log("Prato Inexistente")
            break;
    }

}

//Chamando a funçao e passando os parâmetros
microondas(4, 8)

//Condicionais caso o usuário determine um tempo diferente do padrão
if (tmp >= result * 2 && tmp < result * 3) {
    console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${pipoca}seg.`);

            // Laço de repetição para contar os segundos.
            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Queimou!");
} else if (tmp < result) {
    console.log(`Você escolheu ${opcUser}.`);
    console.log(`Vai levar apenas ${tmp}seg.`);

    let i = tmp;
    for (let i = 1; i < tmp; i++) {
        console.log(`${i}..`);

    }
    console.log("Tempo Insuficiente.");
} else if (tmp >= result * 3) {
    console.log(`Você escolheu ${opcUser}.`);
    console.log(`Vai levar apenas ${tmp}seg.`);

    let i = tmp;
    for (let i = 1; i < tmp; i++) {
        console.log(`${i}..`);

    }
    console.log("Kabuuuum!!!");
} else {
    console.log(`Você escolheu ${opcUser}.`)
    console.log(`Vai levar apenas ${result}seg.`)

    for (let i = 1; i < tmp; i++) {
        console.log(`${i}..`)

    }
    console.log("Prato pronto, bom apetite!!!")
}



