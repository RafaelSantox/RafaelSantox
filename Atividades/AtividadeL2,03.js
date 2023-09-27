//Programa para determinar se três valores passados podem representar um triângulo ou não.

const podeSerTriangulo = (x,y,z) => {
    const somaXY = x+y
    const somaXZ = x+z
    const somaZY = x+y    
    return (somaXY > z && somaXZ > y && somaZY > x) //pesquisar sobre a notação &&

}

const l1 = 5
const l2 = 3
const l3 = 4

const teste = podeSerTriangulo (l1,l2,l3)

//Função auxiliar para ajudar a formar o texto de saída (pesquisar q porra é auxSN)
const auxSN = (t) => {
    if(t) return 'de fato'
    else return 'não'
}

const texto = `OS lados ${l1}, ${l2}, ${l3} ${auxSN(teste)} formam um triângulo`
console.log(texto)