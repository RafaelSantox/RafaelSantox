// Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso)
const xor = (x,y) => {
    return (x||y) && !(x&&y)
}

const v1 = false
const v2 = true

console.log(`${v1} ⊗ ${v2} = ${xor(v1,v2)}.`)