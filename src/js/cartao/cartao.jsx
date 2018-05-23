import React from 'react';

class Cartao extends React.Component {

    constructor(props){
        super(props);
        this.contaCliques = this.contaCliques.bind(this);
    }

    contaCliques(){
        this.props.addClick();
    }
    
    render() {

        return (
            <div className="card stick-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img onClick={this.contaCliques} className="activator" src={this.props.item.imagem} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        {this.props.item.titulo}
                        <i className="material-icons right">more_vert</i>
                    </span>
                    <p>{this.props.item.resumo}</p>
                </div>
                <div className="card-action">
                    <a href={this.props.item.link}>Ver Mais</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        {this.props.item.titulo}
                        <i className="material-icons right">close</i>
                    </span>
                    {this.props.item.descricao}
                </div>
            </div>


        );
    }

}

export default Cartao;