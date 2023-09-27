const range = (start, end, step = 1) => {

    const allNumbers = [start, end, step].every(Number.isFinite)

    if (!allNumbers) {
      throw new TypeError('range() espera apenas números finitos como argumentos.')
    }

    if (step <= 0) {
      throw new Error('passo deve ser um número maior que zero.')
    }

    if (start > end) {
      step = -step
    }
    const length = Math.floor(Math.abs((end - start) / step)) + 1
    return Array.from(Array(length), (x, index) => start + index * step)
}


const multiplo3 = range(0,1000,3)
const multiplo5 = range(0,1000,5)

const somaMultiplos = (list) => list.reduce((acc,x)=>acc+x,0)

console.log(sum(multiplo3,multiplo5))
