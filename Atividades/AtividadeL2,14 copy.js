
const n1 = 3
const n2 = '12'

const exec = (f,x) => f(x)

const resposta1 = exec((x) => {
    if (x===0) return 'Zero'
    else if (x===1) return 'Um'
    else if (x===2) return 'Dois'
    else if (x===3) return 'Três'
    else if (x===4) return 'Quatro'
    else if (x===5) return 'Cinco'
    else if (x===6) return 'Seis'
    else if (x===7) return 'Sete'
    else if (x===8) return 'Oito'
    else if (x===9) return 'Nove'
    else return 'Não é algarismo'
}
,n1)
const resposta2 = exec((x) => {
    if (x===0) return 'Zero'
    else if (x===1) return 'Um'
    else if (x===2) return 'Dois'
    else if (x===3) return 'Três'
    else if (x===4) return 'Quatro'
    else if (x===5) return 'Cinco'
    else if (x===6) return 'Seis'
    else if (x===7) return 'Sete'
    else if (x===8) return 'Oito'
    else if (x===9) return 'Nove'
    else return 'Não é algarismo'
}
,n2)

console.log(resposta1)
console.log(resposta2)