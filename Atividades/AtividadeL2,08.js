//função que retorna valor de um número elevado a quarta potência. 
//(deve ser utilizado uma função que calcula o quadrado de outra função que por sua vez calcula um quadrado de um número).

const fquarta = (x) => fquadrado(fquadrado(x))

const fquadrado = (y) => y**2

const n = 3

resultado = fquarta(n)

const textQuarta = `Quarta potência de ${n} = ${resultado}.`
console.log(textQuarta)