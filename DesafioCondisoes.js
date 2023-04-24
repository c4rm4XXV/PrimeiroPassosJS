// Desafio de condição
/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço do gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

console.log("Olá, vamos caulcular o valor medio de uma viagem: ");
console.log('Com os Seguintes Parametros:');

//Declaração e definição das Variaveis

const distancia = 3853;
console.log('Distância: ' + distancia + "km");
const valorGasolina = 5.79;
console.log('Valor da Gasolina: ' + valorGasolina + 'L');
const valorEtanol = 3.86;
console.log('Valor do Etanol: ' + valorEtanol + 'L');
const comsumoCarroGas = 10.5;
console.log('Comsumo do Veiculo a gasolina: ' + comsumoCarroGas + "Km/L");
const comsumoCarroEta = 6.8;
console.log('Comsumo do Veiculo a gasolina: ' + comsumoCarroEta + "Km/L");
const tipoCombustivel = 'Etanol';
console.log("Tipo do Combustivel Usado na Viagem é: " + tipoCombustivel);
// por facilitação declarar variaveis fora de condições e funções pois as mesmas ficam visiveis apenas 
// no ambito da condição caso as variveis a baixo não fossem declaradas antes na hora de mostar ao console
// eu precisaria colocar o console.log dentro das consições
let gastoViagem;
let litrosConsumidos

//condições para o cauculo logico
if (tipoCombustivel === "Gasolina") {
    //Primeiro Varifico o consumo em Litros dividindo a distância pelo consumod do carro
    litrosConsumidos = distancia / comsumoCarroGas;
    console.log("Quantidade de combustivel consumido: " + litrosConsumidos.toFixed(2) + "L")
    //Apos Multiplico os Litros Consumidos pelo valor do litros
    gastoViagem = litrosConsumidos * valorGasolina;
} else if (tipoCombustivel === 'Etanol') {
    //Primeiro Varifico o consumo em Litros dividindo a distância pelo consumod do carro
    litrosConsumidos = distancia / comsumoCarroEta;
    console.log("Quantidade de combustivel consumido: " + litrosConsumidos.toFixed(2) + "L")
    //Apos Multiplico os Litros Consumidos pelo valor do litros
    gastoViagem = litrosConsumidos * valorEtanol;
}

//Amostragem dos Resultados
//console.log("Valor gasto em combustivel: "+gastoViagem)
//gastoViagem.toFixed(2) diminui as casas decimais para o falor no index
console.log("Valor gasto em combustivel: " + gastoViagem.toFixed(2))

console.log("Testando o git novamente ");
