function Apresentar(nome){
    return `Eu sou ${nome}`
}

const ApresentarArrow= nome => `Eu sou ${nome}`;
const soma=(num1,num2) => num1+num2;

const somaNumerosPequenos = (numero1,numero2) =>{
    if(numero1 || numero2 > 10){
        return 'Apenas numeros de 1 a 9'
    }else{
        return numero1+numero2
    }
}
console.log(somaNumerosPequenos(1,5))
