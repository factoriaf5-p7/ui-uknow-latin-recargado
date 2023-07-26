import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FaWallet } from 'react-icons/fa';
import UserAvatar from '../UserAvatar/UserAvatar';

const Header: React.FC = () => {
    const avatarUrl = 'URL_DEL_AVATAR_DEL_USUARIO';
    const username = 'NOMBRE_DEL_USUARIO';
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
                            <UserAvatar avatarUrl={avatarUrl} username={username} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
