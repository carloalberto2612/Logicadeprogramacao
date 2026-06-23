//Desenvolver um programa que crie uma matriz de 5 linhas e 2 colunas. Pergunte ao usuário números para
//preencher toda a matriz, e ao final, exiba a matriz inteira e a média dos números da matriz.

let m = [[1,7],[4,6],[6,7],[3,4],[5,6]]

let soma = 0

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 2; j++){
        soma += m [i][j];
        console.log(m[i][j]);

    }
    console.log();
}
console.log(`média: ${soma / 10}`);