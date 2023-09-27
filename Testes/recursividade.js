const num = [30,15,20,25]
const indef = x => typeof x == 'undefined'

/*const soma = (lista) => {
    if (lista.length == 0) {return 0}
    else{
        const head = lista.slice(0,1)[0]
        const tail = lista.slice(1)
        return (head + soma(tail))
    }

}
const somA = (lista) => {
    if (lista.length == 0) {return 0}
    else {
        const [x,...xs] = lista
        return x + soma (xs)
    }
}
const indef = x => tipeof(x) == 'undefined'
const soMa = ([x,...x]) => indef(x)? 0 : x + soma(xs)
*/

/*const busca = ([x,...xs],elem,acc=0) => {
    if (x==undefined) {return -1}
    else if (x==elem) return acc   
    else return busca(xs,elem,acc+1) 
}

const busca10 = busca(num,15)

console.log(busca10)*/

/*const maior = ([x,y,...xs]) => {
    if (indef(y)) return x
    else return x>y? maior([x,...xs]) : maior([y,...xs])
}

buscaMaior = maior(num)

console.log(buscaMaior)*/

