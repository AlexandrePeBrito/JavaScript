let notas=[10,6.5,8,9,7.8]
let media=0

console.log(notas)
notas.pop()                         //Remove ultimo valor do array
console.log(notas)

for(let i=0;i<notas.length;i++){
    media=media+notas[i]
}
media=media/notas.length
console.log(media)