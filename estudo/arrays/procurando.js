let alunos=['Joao','Juliana','Ana','Caio','Lara','Marjorie','Guilherme','Aline','Fabiana',
'Andre','Carlos','Paulo','Bia','Vivian','Isabela','Vinicius','Renan','Renata','Daisy','Camilo']
let notas=[7,8,9,6,4,7,8.5,9.7,5.5,6,7.8,9,8,8,8.2,7.9,6.7,3,5,4]

let escola=[alunos,notas]

const ExibeNomeNotas=(nomeAluno) =>{
    if(escola[0].includes(nomeAluno)){
        indice=escola[0].indexOf(nomeAluno)
        return escola[0][indice]+' e sua nota eh '+ escola[1][indice]
    }else{
        return 'Aluno nao matriculado'
    }
}

console.log(ExibeNomeNotas('Andre'))