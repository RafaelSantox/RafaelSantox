//Programa para determinar se três valores passados podem representar um triângulo ou não.

/*const verificaTriangulo = (x,y,z) => {
    if (x<=0 || y<=0 || z<=0) return false
     else if  (x+y <= z || x+z <= y || y+z <= x) return false   
    else return true     

}

const tipoTriangulo = (x,y,z) => {
    const equi = x==y && y==z
    const esca = x != y && x != z && y != z
    if (equi) return 'Equilatero'
    else if (esca) return 'Escaleno'
    else return 'Isoceles'
}

const l1 = 4
const l2 = 4
const l3 = 4

const triangulo = (verificaTriangulo(l1,l2,l3))
const nometriangulo = (tipoTriangulo(l1,l2,l3))
if (triangulo) {
    console.log(`Os lados ${l1}, ${l2}, ${l3} formam um triângulo ${nometriangulo}`)
} else {
    console.log(`Os lados ${l1}, ${l2}, ${l3} não formam um triângulo`)
}
*/


/*const exec = (f,x,y,z) => f(x,y,z)

const triangulo = exec((x,y,z) => {
   if (x<=0 || y<=0 || z<=0) return false
   else if (x+y<=z || x+z<=y || y+z<=x) return false
   else return true
},l1,l2,l3)

const verificaTriangulo = exec((x,y,z) => {
     if (x===y && y==z) return `Equilatero`
     else if (x!=y && y!=z ) return `Escaleno` //se não der isso fudeu
     else return`Isoceles`           
       
},l1,l2,l3)

const l1 = 100
const l2 = 25
const l3 = 1

if (triangulo) {
    console.log (`Os lados ${l1}, ${l2}, ${l3} lados formam um triângulo ${verificaTriangulo}`)
}
else console.log(`Os lados  ${l1}, ${l2}, ${l3} não formam um triângulo`)*/


const verificaTriangulo = x => y => z => {
    if(x <= 0 || y <= 0 || z<=0) return false
    else if (x+y<=z || x+y<=z || x+y<=z) return false
    else return true
}

const verificaTipo = x => y => z => {
    if(x == y && y == z) return ('Equilatero')
    else if (x != y && x != z && y!=z) return ('Escaleno')
    else return ('Isoceles')
}

const l1 = 4
const l2 = 4
const l3 = 2

const triangulo = (verificaTriangulo(l1)(l2)(l3))
const tipoTriangulo = (verificaTipo(l1)(l2)(l3))

if(triangulo)
console.log(`O triângulo de lados ${l1}, ${l2}, ${l3} é um triângulo do tipo ${tipoTriangulo}`)
else 
console.log (`Os lados ${l1}, ${l2}, ${l3} não formam um triângulo`)