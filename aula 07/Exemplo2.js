let aluno = [
    {nome:"Carlos", idade: 19},
    {nome: "Malcolm", idade: 17},
    {nome: "Ian", idade: 20},
    {nome: "Juan", idade: 22},
    {nome: "Pedro", idade: 18},
    { nome: "Bruno", idade: 20}
]


    for(let i = 0; i < aluno.length; i++){
        if (aluno[i].idade >= 18){
            console.log(`${aluno[i].nome} é maior de idade.`)

        }else{
            console.log (`${aluno[i].nome} é menor de idade.`)
        }
    }
