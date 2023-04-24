/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

const n1 = 7;
const n2 = 7;
const n3 = 7;

const media = (n1 + n2 + n3) / 3;

if (media > 7) {
    console.log("O alunos foi aprovado com uma media :" + media.toFixed(1));
} else if (media < 5) {
    console.log("O alunos foi reprovado com uma media :" + media.toFixed(1));
} else {
    console.log("O alunos com uma media :" + media.toFixed(1) + ", sugerido recuperação");
}


