const range = (start, end, step = 1) => {
    // Testa se os 3 primeiros argumentos são números finitos,
    // usando Array.every() e Number.isFinite()
    const allNumbers = [start, end, step].every(Number.isFinite)
    // Lança um erro se algum dos 3 primeiros argumentos não for um número finito.
    if (!allNumbers) {
      throw new TypeError('range() espera apenas números finitos como argumentos.')
    }
    // Assegura que o passo é sempre um número positivo.
    if (step <= 0) {
      throw new Error('passo deve ser um número maior que zero.')
    }
    // Quando o número inicial é maior do que o número final,
    // modifica o passo para decrescer em vez de incrementar.
    if (start > end) {
      step = -step
    }
    // Determina o comprimento do conjunto a ser retornado.
    // O comprimento é incrementado em 1 após Math.floor().
    // Isto assegura que o número final é listado se estiver dentro do intervalo.
    const length = Math.floor(Math.abs((end - start) / step)) + 1
    // Preenche um novo conjunto com os números do intervalo
    // usando o Array.from() com uma função de mapeamento.
    // Finalmente, retorna o novo array.
    return Array.from(Array(length), (x, index) => start + index * step)
}

const resposta = range(1,1000,setp=3)
const resposta2 = range(1,1000,setp=5)

console.log(resposta)
console.log(resposta2)