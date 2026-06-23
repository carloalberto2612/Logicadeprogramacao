//Desenvolver um programa que pergunte o conteúdo de duas matrizes a e b, cada uma com 5 linhas e 3 colunas,
//construa uma matriz c de mesma dimensão, a qual é formada pela soma dos elementos da matriz a com a matriz
//b. Apresentar ao final o conteúdo das três matrizes.

let a = [[4,5,5],[5,2,7],[2,8,9],[3,1,6],[4,5,9]]
let b = [[6,2,5],[9,6,7],[5,8,9],[5,2,1],[8,2,4]]
let c = []

let soma = 0

for(let i = 0; i < 5; i++){
    c[i] = [];
for(let j = 0; j < 3; j++){
c[i][j] = a[i][j]+b[i][j];

}
}
console.log(a)
console.log(b)
console.log(c)