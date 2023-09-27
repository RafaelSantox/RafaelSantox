//. Programa para calcular a distância euclidiana entre dois pontos no plano cartesiano. Utilize a equação geral da reta para calcular a distância quando a reta não for paralela a nenhum dos eixos (abscissas ou ordenadas) e as versões simplificadas quando for paralela.

const distancia = (x1,y1,x2,y2) => {
    //Função Math.abs é pré definida de javascript e serve para retornar o módulo de um valor
    //Função Math.sqrt calcula a raiz quadrada
    const x1x2 = Math.abs (x1-x2)
    const y1y2 = Math.abs (y1-y2)
    if (x1 == x2) return y1y2 //paralela à coordenada
    else if (y1 == y2) return x1x2
    else return Math.sqrt(x1x2**2 + y1y2**2) //hipotenusa
}

const ponto1x = 1
const ponto1y = 5
const ponto2x = 1
const ponto2y = 1

const resultado = distancia(ponto1x,ponto1y,ponto2x,ponto2y)

console.log(`Distância entre os pontos é ${resultado}`)