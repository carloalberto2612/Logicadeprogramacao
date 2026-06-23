let nomes = ["Carlos", "Charles", "Don Quixote","Vinicin","Ronaldinho"];

let op = "sim"
let nome;
let mudaOP = 1;

while (op == "sim"){
    nome = "Charles"

    for(let i = 0; i < nomes.length; i++) {
        if (nome == nomes[i]) {
            console.log (`${nome} existe no vetor!`)
        }
    }

nome = "Carlos";
  mudaOP++; 
  if (mudaOP == 3) 
    op = "NÃO";
}