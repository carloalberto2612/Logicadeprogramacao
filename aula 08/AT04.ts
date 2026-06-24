function calcularDesconto(preco: number, percentual: number ) : number{
    let valorFinal: number = preco - (preco * (percentual/100));
    return valorFinal

}

console.log(calcularDesconto(600, 10))