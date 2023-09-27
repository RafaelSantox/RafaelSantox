const Aluno = (nome, idade, matricula, curso) => Object.freeze(({
    nome, idade, matricula, curso
}))

const turma = []

const adicionarAluno = (nome, idade, matricula, curso) => {
    const alunoNovo = Aluno(nome,idade,matricula,curso)
    turma.push(alunoNovo)
}   

const listaAlunos = () => {
    turma.forEach(Aluno => {
    console.log("Lista dos alunos: ")
    console.log(`Nome: ${Aluno.nome}, Idade: ${Aluno.idade}, matricula ${Aluno.matricula}, curso: ${Aluno.curso} `)
})
}

const aluno1 = adicionarAluno('fulano',20,292203,'S.I')
const aluno2 = adicionarAluno('anfklnv',21,292202,'E.C')
const aluno3 = adicionarAluno('bsrh',22,292201,'C.C')
const aluno4 = adicionarAluno('fulano',20,29220,'S.I')

listaAlunos()

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

const buscaCurso = (curso) => turma.filter((aluno)=>aluno.curso === curso)

console.log(buscaCurso('S.I'))

console.log(contagem)