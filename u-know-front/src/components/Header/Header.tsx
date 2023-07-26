import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FaWallet } from 'react-icons/fa';

const Header: React.FC = () => {

    return (
        <header>
            <div className="logo">
                <Link to="/home-user">
                    <img src="./src/assets/logo-uk.png"/>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/wallet">
                            <FaWallet />
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
