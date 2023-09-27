
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

const equals = (list1, list2) => {
    return list1.length === list2.length &&
    list1.every((value, i) => value === list2[i]);
}

const primo = (n) => {
    const divisores = range(1,n).filter((x) =>n%x==0)
    return equals(divisores,[1,n])
} 

const primosMenores = n => range(1,n).filter((x)=>primo(x))
console.log(primosMenores(100))