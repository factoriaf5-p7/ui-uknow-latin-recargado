import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useUserContext, useWalletContext } from './UserContext';
import logo_saldo from '../../assets/logo_saldo.png';
import logo_perfil from '../../assets/logo_perfil.png';


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
                        <Link to="/wallet">
                            {wallet_balance} uKoins
                            <img src={logo_saldo} alt="Logo_saldo" />
                        </Link>
                    </li>
                    <li className="right-li">
                        <Link to="/profile">
                        <img src={logo_perfil} alt="Logo_perfil" />
                            {name}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
