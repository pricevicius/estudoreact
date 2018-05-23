import React from 'react';
import Axios from 'axios';


import NavMenu from "./nav-menu";


class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { menu: [] };
    }

    componentDidMount() {
        let self = this;
        Axios.get('http://localhost:8000/servidor.php?menu=1').then(function (response) {
            self.setState({
                menu: response.data
            });

        });

    }

    render() {

        let menu = this.state.menu;

        let corNav = "nav-wrapper " + this.props.color;

        return ( //usa o parenteses para quando o conteudo for muito grande. Melhor pratica pra qualquer tamanho!!!
            <nav>
                <div className={corNav}>
                    <div className="container">
                        <a href="#" className="brand-logo"> {this.props.titulo} </a>
                        <NavMenu menu={menu} />
                    </div>
                </div>
            </nav>
        );
    }

}

export default NavBar;