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
console.log("Informe a opção de preparo e o tempo de preparo.")
console.log("INFORME APENAS OPÇÃO DE PREPARO PARA TEMPO PADRÃO!\n\n")

//Declaração das variáveis que guardam o tempo padrão para cada prato.
var pipoca = 10;
var macarrao = 8;
var carne = 15;
var feijao = 12;
var brigadeiro = 8;

//Declaração das variáveis
var opcUser = "";
var tmp = "";
var result = "";


function microondasOpcao(opcao) {

    if (opcao == 1) {
        opcUser = "[PIPOCA]";
        tmp = pipoca;
    } else if (opcao == 2) {
        opcUser = "[MACARRÃO]";
        tmp = macarrao;
    } else if (opcao == 3) {
        opcUser = "[CARNE]";
        tmp = "TEMPO PADRÃO: 15seg";
    } else if (opcao == 4) {
        opcUser = "[FEIJÃO]";
        tmp = "TEMPO PADRÃO: 15seg";
    } else if (opcao == 5) {
        opcUser = "[BRIGADEIRO]";
        tmp = "TEMPO PADRÃO: 8seg"
    } else {
        return console.log("Prato Inexistente")
    }
    return
}

function microondasTempo(tempo) {
    tmp = tempo;
    return
}

microondasOpcao(3);
microondasTempo(35);

switch (opcUser) {
    case "[PIPOCA]":
        if (tmp >= pipoca * 2 && tmp < pipoca * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Queimou!");
        } else if (tmp < pipoca) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            let i = tmp;
            for (let i = 1; i < tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Tempo Insuficiente.")
        } else if (tmp >= pipoca * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            let i = tmp;
            for (let i = 1; i < tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Kabuuuum!!!");
        } else {
            console.log(`Você escolheu ${opcUser}.`)
            console.log(`Vai levar apenas ${tmp}seg.`)

            for (let i = 1; i < tmp; i++) {
                console.log(`${i}..`)

            }
            console.log("Prato pronto, bom apetite!!!")
        }
        break;
    case "[MACARRÃO]":
        if (tmp >= macarrao * 2 && tmp < macarrao * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Queimou!");
        } else if (tmp < macarrao) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            let i = tmp;
            for (let i = 0; i < tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Tempo Insuficiente.")
        } else if (tmp >= macarrao * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Kabuuuum!!!");
        } else {
            console.log(`Você escolheu ${opcUser}.`)
            console.log(`Vai levar apenas ${tmp}seg.`)

            for (let i = 1; i < tmp; i++) {
                console.log(`${i}..`)

            }
            console.log("Prato pronto, bom apetite!!!")
        }
        break;
    case "[CARNE]":
        if (tmp >= carne * 2 && tmp < carne * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Queimou!");
        } else if (tmp < carne) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            let i = tmp;
            for (let i = 0; i < tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Tempo Insuficiente.")
        } else if (tmp >= carne * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Kabuuuum!!!");
        } else {
            console.log(`Você escolheu ${opcUser}.`)
            console.log(`Vai levar apenas ${tmp}seg.`)

            for (let i = 1; i < tmp; i++) {
                console.log(`${i}..`)

            }
            console.log("Prato pronto, bom apetite!!!")
        }
        break;
    case "[FEIJÃO]":
        if (tmp >= feijao * 2 && tmp < feijao * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Queimou!");
        } else if (tmp < feijao) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            let i = tmp;
            for (let i = 0; i < tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Tempo Insuficiente.")
        } else if (tmp >= feijao * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Kabuuuum!!!");
        } else {
            console.log(`Você escolheu ${opcUser}.`)
            console.log(`Vai levar apenas ${tmp}seg.`)

            for (let i = 1; i < tmp; i++) {
                console.log(`${i}..`)

            }
            console.log("Prato pronto, bom apetite!!!")
        }
        break;
    case "[BRIGADEIRO]":
        if (tmp >= brigadeiro * 2 && tmp < brigadeiro * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Queimou!");
        } else if (tmp < brigadeiro) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            let i = tmp;
            for (let i = 0; i < tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Tempo Insuficiente.")
        } else if (tmp >= brigadeiro * 3) {
            console.log(`Você escolheu ${opcUser}.`);
            console.log(`Vai levar apenas ${tmp}seg.`);

            for (let i = 1; i <= tmp; i++) {
                console.log(`${i}..`);

            }
            console.log("Kabuuuum!!!");
        } else {
            console.log(`Você escolheu ${opcUser}.`)
            console.log(`Vai levar apenas ${tmp}seg.`)

            for (let i = 1; i < tmp; i++) {
                console.log(`${i}..`)

            }
            console.log("Prato pronto, bom apetite!!!")
        }
        break;

    default:
        console.log(`Você escolheu ${opcUser}.`)
        console.log(`Vai levar apenas ${tmp}seg.`)

        for (let i = 1; i < tmp; i++) {
            console.log(`${i}..`)

        }
        console.log("Prato pronto, bom apetite!!!")
        break;
}


