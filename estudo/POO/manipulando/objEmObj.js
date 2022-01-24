const cliente ={
    nome:'Alexandre',
    idade:22,
    cpf:'07828524420',
    email:'alex@gmail.com'
}

cliente.dependente={
    nome:'Ana',
    parentesco:'Mae',
    idade:51,
    cpf:'07828524420',
    email:'ana@gmail.com'
}

console.log(cliente)

cliente.dependente.nome='Ana Maria'
console.log(cliente)