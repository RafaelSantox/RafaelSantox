const Aluno = (nome, idade, matricula, curso) => Object.freeze(({
    nome, idade, matricula, curso
}))


const turma = []

const adicionar = (turma, nome, idade, matricula, curso) => {
    return [...turma, { nome, idade, matricula, curso }]
}

const aluno1 = adicionar(turma, 'joao', 19, 2, "s.i")
const aluno2 = adicionar(aluno1, 'pedro', 22, 1, "s.i")
const aluno3 = adicionar(aluno2, 'luiz', 20, 4, "e.c")
const aluno4 = adicionar(aluno3, 'carlos', 21, 3, "c.c")


const listaalunos=aluno4
const buscarcurso = (curso) =>listaalunos.filter(
    (aluno) => aluno.curso === curso)
const exluiraluno = (nome) =>listaalunos.filter(
    (aluno) => aluno.nome !== nome)
    console.log(listaalunos)


const ordenar = (lista) => lista.sort((a,b)=>a.matricula-b.matricula)
const contar = (buscarcurso) => buscarcurso.length

const contarCuros = (turma) => {
    const contagem = {};

    turma.forEach(aluno => {
        const curso = aluno.curso
        if (contagem[curso]) {
            contagem[curso]++
        } else {
            contagem[curso] = 1
        }
    })
    return contagem
}

const contagem = contarCuros(turma)

console.log(buscarcurso('s.i'))
console.log(exluiraluno('joao'))
console.log(ordenar(listaalunos))
console.log(contagem)