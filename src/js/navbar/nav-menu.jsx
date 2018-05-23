import React from 'react';



class NavMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {menuAtivo: 'Home'};
        this.alteraActive = this.alteraActive.bind(this);
    }

    alteraActive(titulo,self){
        self.setState({menuAtivo: titulo});
    }

    //renderizar classe
    render() {

        let self = this;

        let lista = this.props.menu.map(function (val, index) {
            return (
                <li key={val.order} onClick={self.alteraActive.bind(null,val.titulo,self)} className={ self.state.menuAtivo == val.titulo ? 'active' : ''}><a href={val.link}>{val.titulo}</a></li>
            );
        });

        return ( 
            <ul id="nav-mobile" className="right">
                {lista}
            </ul>
        );
    }

}

export default NavMenu;