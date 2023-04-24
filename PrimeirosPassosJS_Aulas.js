//console.log para imprimir algo em tela
console.log('Miguel');

// Let para variaveis
let variavel = 10

console.log(variavel)

variavel = 20

console.log(variavel)
// const para constantes
const pi = 3.14
// erro caso tente alterar o valor
//pi = 10

// valores Boolean Verdadeira e falso, valores condicionais 
const valorVerdadeiro = true;
const valorFalso = false;

//operadores
/*operadores matematicos
+ SOMA
- SUBTRAÇÃO
/ DIVISÃO
* MULTIPLICAÇÃO
*/

variavel = 10 + 5
console.log('SOMA:' + variavel)

variavel = 10 - 5
console.log('SUB:' + variavel)

variavel = 10 / 5
console.log('DIV:' + variavel)

variavel = 10 * 5
console.log('MULT:' + variavel)

console.log();
console.log();
console.log();
console.log();
console.log();
// Estruturas Condicionais

/* operadores condicionais
> maior
< menor
>= maior igual
<= menor igual
== igualdade ignorando o tipo pode converter string em let
=== igualdade sem verificar o tipo mais remendado no JS
! negativo
= atribuição 
% Retorna o resto da divisão
*/


const n = 120;
//por convenção para variaveis boolean sempre iniciar com o prefixo is
const isNumeroPar = (n % 2) === 0;



// verificaçãos de condição 
// if() Verifica de a condição no index é verdadeira
// Else execulta somente quando a condição no idex do if é negativa 
// else if() é um meio de realizar consições encadeadas realmente dificulta a leitura 

if (n < 1) {
    console.log("Numero " + n + " é invalido pois é menor que 1")
} else if (n > 100) {
    console.log("Numero " + n + " é invalido pois é maior que 100")
} else if (isNumeroPar) {
    console.log(isNumeroPar);
    console.log(n + " é um numero par");
} else {
    console.log(isNumeroPar);
    console.log(n + " é um numero impar");
}