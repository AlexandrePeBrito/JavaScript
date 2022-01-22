//Calcular a media [10, 6.5, 8, 7.5]

/*let nota1=10
let nota2=6.5
let nota3=8
let nota4=7.5

let media=(nota1+nota2+nota3+nota4)/4
console.log(media)*/

//-----------------------------------
/*let notas=[10,6.5,8,7.5]
let media=(notas[0]+notas[1]+notas[2]+notas[3])/notas.length
console.log(media)*/

//-----------------------------------
let notas=[10,6.5,8,7.5]
let media=0

for(let i=0;i<notas.length;i++){
    media=media+notas[i]
    console.log(media)
}
media=media/notas.length
console.log(media)