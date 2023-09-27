//usando funções como retorno para desagregar os parâmetros para aplicação idependente de argumentos

const potencia = (x) => (n) => x**n  //os argumentos foram separados onde o argumento x retorna para uma segunda expressão arrow tendo expoente n

const res1 = potencia (5) (3) //podemos agora remover qualquer argumento nessas linhas para determinarmos base ou expoente qualquer exemplo (5) = 5**n
const res2 = potencia (81) (1/2)
const res3 = potencia (2) (2)

console.log(res1)
console.log(res2)
console.log(res3)