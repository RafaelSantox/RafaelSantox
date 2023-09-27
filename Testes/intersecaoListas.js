const lista1 = ['Ana','Bia','Marcela','Carlos','Maria'] 
const lista2 = ['bia','João','Marcela','Carlos','Maria']

const filtrarListas = (l1,l2) => {
    const intercecao = l1.filter((elem => l2.includes(elem)))
    const nIntercecao = intercecao.reduce((acc) => acc + 1, 0)
    return nIntercecao
}

const resultado = filtrarListas(lista1,lista2)

console.log(resultado)