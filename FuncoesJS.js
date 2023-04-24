//Funtion é um bloco de codigo que realiza determinada açao que eu posso infocar smepre que necessario
// Funtion podem receber um ou mais valores como parametro para determinada ação 
// também podem retonar um valor com o comando return
/*
function sayMyName(name){
    console.log("Teste "+name);
}

function juros(valor, juros){
    const total = (juros/100)*valor;
    return total+valor;
}
sayMyName('Miguel');
sayMyName('Lara');

console.log("Juros "+juros(100,15));
*/

// Main é onde todo codigo principal fica amarzenado e funcion auxiliares class e outra 
//ficam fora da funtion mains

//Codigo do exercicio 03 com funtion

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function classiIMC(imc) {
    if (imc > 40) {
        return ("Obecidade Grave");
    } else if (imc > 30) {
        return ("Obeso")
    } else if (imc > 25) {
        return ("Acima do Peso");
    } else if (imc > 18.5) {
        return ("Peso Normal");
    } else {
        return ("Abaixo do Peso");
    }
}
/*
function main(){
    console.log('A pessoa está '+classiIMC(calcularIMC(75.3, 10)));
}
//sempre precisa chamar a função main para o codigo rodar
main();
*/
//para iniciar um funcio imediatamete invocada basta colocar a funcion em paretese 

(function(){
    console.log('A pessoa está '+classiIMC(calcularIMC(75.3, 10)));
})();

