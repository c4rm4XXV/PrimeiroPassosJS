/*
            //get é um prefixo para funtion que mostram um valor;
            function getNome(nome) {
                //console.log("Meu nome é "+nome);
                return ("Meu nome é " + nome);
            }
            //como agora não uso o console.log não funtion preciso então, para mostrar na tela chamar o nome com console.log
            getNome("Miguel");

            //usar uma função dentro da outra para isso a funtion chamada deve necessariamente retornar um valor não só mostrar na tela 
            function verificarIdade(idade) {
                if (idade >= 18) {
                    console.log(getNome('Miguel') + " e sou maior de idade!");
                } else {
                    console.log(getNome('Miguel') + " e sou menor de idade!");
                }
            }

            verificarIdade(25);
            console.log(getNome("Lara"));

*/

//exercicio03 com funtion

function verificarPag(valor, op) {
    if (op === 1) {
        console.log("Desconto de 10%");
        return (valor - (valor * 0.1));
    } else if (op === 2) {
        console.log("Desconto de 15%");
        return (valor - (valor * 0.15));
    } else if (op === 3) {
        console.log("Sem Desconto");
        return (valor);
    } else if (op === 4) {
        console.log("10% de Juros");
        return (valor + (valor * 0.1));
    } else {
        console.log("Forma de Pagamento: ERRO!!!! ");
    }
}

const preco = 100;
const formaPag = 4;

console.log("Preço do Produto:" + preco);
console.log("Total a Pagar:" + verificarPag(preco, formaPag));