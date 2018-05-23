import React from 'react';

import Titulo from '../titulo/titulo'; 
import NavBar from '../navbar/navbar';
import ListaCartao from '../cartao/lista-cartao';


class Home extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="content">
                <NavBar titulo="React" color="red" />
                <div className="container">
                    <Titulo />
                    <ListaCartao qtdLinha="4" qtdGrid="3" />
                </div>
            </div>
            );
    } 

}

export default Home;
