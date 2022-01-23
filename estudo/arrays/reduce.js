let sala1=[9,5,7,8,6]
let sala2=[4,5,7,7,6.9]
let sala3=[3,3,7,7,8.9]

function mediaSala(notasSala){
    const somaDasNotas=notasSala.reduce(    (acumulador,atual)=>
        atual+acumulador,0) 
        return somaDasNotas/notasSala.length
}

console.log('Media sala 1: '+mediaSala(sala1))
console.log('Media sala 2: '+mediaSala(sala2))
console.log('Media sala 3: '+mediaSala(sala3))