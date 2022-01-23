let notas=[8,6,6.5,7,8]
let soma=0

notas.forEach(nota =>{
    soma+=nota
})

let media=soma/notas.length
console.log(soma,notas.length,media)