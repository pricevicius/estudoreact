import React from 'react';
import Axios from 'axios';

import Cartao from './cartao';
import Busca from '../busca/busca';


class ListaCartao extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cliques: 0, busca: '', dados : [], servidor: []};
        this.addClick = this.addClick.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addClick() {
        //this.setState({cliques: this.state.cliques + 1});
        this.setState((prevState) => ({
            cliques: prevState.cliques + 1
        }));
    }

    atualizaBusca(evento) {
        this.setState({ busca: evento.target.value });
        if(evento.target.value == ""){
            this.setState({ dados: this.state.servidor });
        }
    }

    onSubmit(evento) {
        let busca = this.state.busca;
        let dados = this.state.servidor;
        let novaLista = dados.filter(function(item){
            if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1 
                || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1 
                || item.resumo.toUpperCase().indexOf(busca.toUpperCase()) > -1 ){
                return item;
            }
        });

        this.setState({ dados: novaLista });

        evento.preventDefault();
    }

    //usa para evitar o carregamento toda hora. Seta no constructor e usa o DIDMOUNT
    componentDidMount(){

        let self = this;
        Axios.get('http://localhost:8000/servidor.php?dados=1').then(function(response){
            self.setState({
                dados: response.data,
                servidor: response.data,
            });
        });

    }

    render() {

        let noticias = this.state.dados;

        let aux = [];
        let novaLista = [];

        for (let k = 0; k < noticias.length; k++) {
            aux.push(noticias[k]);
            if (aux.length == this.props.qtdLinha) {
                novaLista.push(aux);
                aux = [];
            } else if (k == noticias.length - 1) {
                novaLista.push(aux);
            }
        }

        var classCol = "col m" + this.props.qtdGrid;


        let listaCartoes = function (grupo, self) {
            //console.log(self);
            return grupo.map(function (item, index) {
                return (
                    <div className={classCol} key={index}>
                        <Cartao item={item} addClick={self.addClick} />
                    </div>
                );
            });
        }

        let self = this;
        let linha = novaLista.map(function (grupo, index) {
            return (
                <div className="row" key={index} >
                    {listaCartoes(grupo, self)}
                </div>
            );
        });
        //console.log(novaLista);

        return (
            <div>
                <div className="row">
                    <Busca atualizaBusca={this.atualizaBusca} busca={this.state.busca} onSubmit={this.onSubmit} />
                </div>
                <p>Quandidate de Cliques: {this.state.cliques} </p>
                {linha}
            </div>
        );
    }

}

export default ListaCartao;