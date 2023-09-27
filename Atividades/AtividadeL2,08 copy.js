//função que retorna valor de um número elevado a quarta potência. 
//(deve ser utilizado uma função que calcula o quadrado de outra função que por sua vez calcula um quadrado de um número).

const quadrado = (y) => y**2 

const exec = (f,x) => f(x)

const n1 = 2
const resposta = exec((x) => quadrado(quadrado(x)),n1)

console.log (resposta)