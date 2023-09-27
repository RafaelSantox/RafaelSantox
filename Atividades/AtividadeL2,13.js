// Um móvel com velocidade constante percorre uma trajetória retilínea. Considere a posição inicial. Escreva um programa para calcular a velocidade do objeto em um dado instante t e posição x

const tempofinal = 30
const distanciafinal = 2000

const exec = (f,x,y) => f(x,y)

const resultado = exec((t, x, t0=0, x0=500) => (x-x0)/(t-t0),tempofinal,distanciafinal)

console.log(`A velocidade é: ${resultado} m/s`)