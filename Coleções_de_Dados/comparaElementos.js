const lista1 = [3,2,5,7,9,29]
const lista2 = [2,1,4,7,5]

const elementoComum = (lista1,lista2) => {
    lista1.filter(elemento => lista2.includes(elemento)) 
    return elementoComum.length
}

const comuns = elementoComum(lista1,lista2)

console.log(comuns)