/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal 
de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler 
qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preco = 100;
const formaPag = 5;
let total=null;
console.log("Preço do Produto:" + preco);
if (formaPag === 1) {
    total = preco - (preco * 0.1);
    console.log("Forma de Pagamento Débito ");
} else if (formaPag === 2) {
    total = preco - (preco * 0.15);
    console.log("Forma de Pagamento: Dinheiro ou PIX");
} else if (formaPag === 3) {
    total = preco;
    console.log("Forma de Pagamento: Em duas vezes ");
} else if(formaPag === 4){
    total = preco + (preco * 0.1);
    console.log("Forma de Pagamento: Acima de duas vezes ");
}else{
    console.log("Forma de Pagamento: ERRO!!!! ");
}

console.log("Total a Pagar:" + total);