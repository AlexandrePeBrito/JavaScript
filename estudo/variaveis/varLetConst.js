/*Var -> Uma variavel tipo VAR pode ser primeiro utilizada e depois criada. Permitindo utilizar a 
ariavel antes de definir como Var, Podendo causar conflito de variaveis caso n preste atençao.

Let -> Uma variavel tipo Let tem q ser criada para ser utilizada e aceita modificações.

Const -> Uma variavel tipo Const tem q ser criada para ser utilizada e NÃO ACEITA modificações.*/


/*var altura=7;
var comprimento=5;
area=5*7;

console.log(area);

var area;*/

/*VAR permite utilizar a variavel antes de definir como Var, Podendo causar 
conflito de variaveis caso n preste atençao*/

//-----------------------------------------------------------------------------



/*let forma='retangulo'
let altura =7;
let comprimento=5;
let area

if(forma=='retangulo'){
    area=altura*comprimento;
    
}else{
    area=(altura*comprimento)/2;
}
console.log(area);*/


const forma1='retangulo'
const altura1 =7;
const comprimento1=5;
//const area1=5;          Precisa inicializar com algum valor
let area1;

if(forma1=='retangulo'){
    area1=altura1*comprimento1;
    
}else{
    area1=(altura1*comprimento1)/2;
}
console.log(area1);

