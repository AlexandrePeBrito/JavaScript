let notas=[10,6.5,8]
let media=0

notas.push(9)                   //Adicionando elementos
for(let i=0;i<notas.length;i++){
    media=media+notas[i]
    console.log(media)
}
media=media/notas.length
console.log(media)