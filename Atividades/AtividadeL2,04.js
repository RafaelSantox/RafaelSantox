//Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados.

const podeSerTriangulo = (x,y,z) => { //tenho que testar se os lados formam triângulos primeiro
    const somaXY = x+y
    const somaXZ = x+z
    const somaZY = x+y    
    return (somaXY > z && somaXZ > y && somaZY > x) //pesquisar sobre a notação &&

}

const tipoTriangulo = (x,y,z) => {
    //a primeira constante é verdade se todos lados forem iguais
    //a segunda constante é verdade se todos forem diferentes
    //em ultimo caso só resta uma opção
    const iguaisXYZ = x===y && y==z
    const difXYZ = x!=y && x!=z && y!=z
    if (iguaisXYZ) return 'Equilátero'
    else if (difXYZ) return 'Escaleno'
    else return 'Isoceles'
}

const l1 = 5
const l2 = 4
const l3 = 3

if(podeSerTriangulo(l1,l2,l3)) {
    console.log(`Triângulo ${tipoTriangulo(l1,l2,l3)}.`)
} else console.log('Não é triângulo')