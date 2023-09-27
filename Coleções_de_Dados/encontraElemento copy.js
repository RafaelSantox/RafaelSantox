const listaNomes = ['Paulo','João','Flavio','Andresa','Bianca']

const tamanho = (lista) => lista.length
const encontraPosicaoFinal = (lista) => lista[lista.length - 1]

const encontraPenultimo = (lista) => lista[lista.length - 2] 

const tamanhoListaNomes = tamanho(listaNomes)
const ultimo = encontraPosicaoFinal(listaNomes)
const penultimo = encontraPenultimo(listaNomes)

console.log(tamanhoListaNomes)
console.log(ultimo)
console.log(penultimo)