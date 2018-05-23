import React from 'react';

class Titulo extends React.Component {

    constructor(props){
        super(props);
        this.state = {hora: new Date()};
    }

    // metodo executado quando o componente é renderizado na tela
    componentDidMount(){
        this.horaID = setInterval(
            ()=> this.atualizarSegundos(),
            1000
        );
    }

    atualizarSegundos(){
        this.setState({hora: new Date()});
    }

    componentWillUnmount(){
        clearInterval(this.horaID);
    }

    //renderizar classe
    render(){
        return ( //usa o parenteses para quando o conteudo for muito grande. Melhor pratica pra qualquer tamanho!!!
                <h1>Página Inicial {this.state.hora.toLocaleTimeString()} </h1>
            );
    } 

}

export default Titulo;