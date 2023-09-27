const lista = ['Maria','Pedro','Bianca','Paulo']

const posicao = (pos) => (x) => lista.indexOf(x)==(lista.length+pos)

const ultimo = posicao(-1)
const penultimo = posicao(-2)

const ultimoElem = lista.filter(ultimo)
const peunultimoElem = lista.filter(penultimo)

console.log(ultimoElem)
console.log(peunultimoElem)