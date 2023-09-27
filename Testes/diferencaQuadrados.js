
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

const naturais = range(1,10)
const naturaisQuad = naturais.map((x) => x**2)
const somaNatuarisQuad = naturaisQuad.reduce((acc,x)=>acc+x,0)
const quadSomaNaturais = naturais.reduce((acc,x)=>acc+x,0)**2

const dif = somaNatuarisQuad - quadSomaNaturais

console.log(dif)


