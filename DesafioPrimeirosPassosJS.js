// Desafio Operações Matematicas
/*
console.log('Faça um programa para calcular o valor de uma viagem '+
"Você terá 3 variáveis. Sendo elas: " +
" 1 - Preço do combustível; "+
' 2 - Gasto médio de combustível do carro por KM; '+
' 3 - Distância em KM da viagem; '+    
'Imprima no console o valor que será gasto para realizar esta viagem.');
*/

console.log("Olá, vamos caulcular o valor medio de uma viagem: ");
console.log('Com os Seguintes Parametros:');

//Declaração e definição das Variaveis

const distancia = 3853;
console.log('Distância: ' + distancia + "km");
const valorCombustivel = 5.79;
console.log('Valor do Combustivel: ' + valorCombustivel + 'L');
const comsumoCarro = 12;
console.log('Comsumo do Veiculo: ' + comsumoCarro + "Km/L");
let gastoViagem;
let litrosConsumidos

//Calculo Logico  

//Primeiro Varifico o consumo em Litros dividindo a distância pelo consumod do carro
litrosConsumidos = distancia / comsumoCarro;
console.log("Quantidade de combustivel consumido: " + litrosConsumidos.toFixed(2) + "L")
//Apos Multiplico os Litros Consumidos pelo valor do litros
gastoViagem = litrosConsumidos * valorCombustivel

//Amostragem dos Resultados
console.log("Valor gasto em combustivel: " + gastoViagem)
//gastoViagem.toFixed(2) diminui as casas decimais para o falor no index
console.log("Valor gasto em combustivel: " + gastoViagem.toFixed(2))






