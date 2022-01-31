import React,{Component} from 'react';

class Cadastro extends Component {
    render() { 
        return(
            <form>
                <input type='text' placeholder='Titulo'/>
                <textarea placeholder='Escreva sua nota'/>
                <button>Criar Nota</button>
            </form>
        );
    }
}

export default Cadastro;