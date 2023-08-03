import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useUserContext, useWalletContext } from '../UserContext';
import Logo_saldo from '../../assets/logo_saldo.png';
import Logo_perfil from '../../assets/Logo_perfil.png'


const Header: React.FC = () => {
    const { name } = useUserContext();
    const { wallet_balance } = useWalletContext();
    return (
        <header>
            
            <div className="logo">
                <Link to="/home-user">
                    <img src="./src/assets/logo-uk.png" alt="Logo" />
                </Link>
               
            </div>
        
            <nav>
           
           
                <ul className="ul">
               
                    <li className="right-li">
                    <img src={Logo_saldo} alt="icono-saldo" />
                        <Link to="/wallet">
                          
                            {wallet_balance} uKoins
                        </Link>
                    </li>
                    
                    <li className="right-li">
                    <img src={Logo_perfil} alt="icono-saldo" />
                        <Link to="/profile">
                            {name}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
