import React from 'react';

import Titulo from '../titulo/titulo'; 
import NavBar from '../navbar/navbar';
import ListaCartao from '../cartao/lista-cartao';


class Sobre extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="content">
                <NavBar titulo="React" color="red" />
                <div className="container">
                    Sobre
                </div>
            </div>
            );
    } 

}

export default Sobre;
