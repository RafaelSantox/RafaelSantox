//. Programa para calcular a distância euclidiana entre dois pontos no plano cartesiano. Utilize a equação geral da reta para calcular a distância quando a reta não for paralela a nenhum dos eixos (abscissas ou ordenadas) e as versões simplificadas quando for paralela.


const exec = (f,w,x,y,z) => f(w,x,y,z)

const Px1 = 4
const Px2 = 2
const Py1 = 4
const Py2 = 2

const resultado = exec((x1,x2,y1,y2) => {
    x1x2 = Math.abs (x1-x2)
    y1y2 = Math.abs (y1-y2)
    if (x1==x2) return y1y2
    else if (y1==y2) return x1x2
    else return Math.sqrt(x1x2**2 + y1y2**2)
},Px1,Px2,Py2,Py2)

console.log (`A distância entre os pontos x1: ${Px1}, x2: ${Px2} e y1: ${Py1} e y2: ${Py2} é ${resultado}.`)