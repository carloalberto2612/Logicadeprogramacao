function calcularArea(base: number,altura: number): number {
return base * altura;
}

console.log(calcularArea(9,5));

function converterTemperatura (temp:number): number {
    return (temp * 9 / 5) + 32;
}

console.log (`Temperatura em ºF: ${converterTemperatura(25)}`)