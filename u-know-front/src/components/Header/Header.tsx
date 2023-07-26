import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
/* import { FaWallet } from 'react-icons/fa'; */
import { useUserContext } from '../../UserContext';
import UserAvatar from '../UserAvatar/UserAvatar';

const Header: React.FC = () => {
    const { name } = useUserContext();
    return (
        <header>
            <div className="logo">
                <Link to="/home-user">
                    <img src="./src/assets/logo-uk.png"/>
                </Link>
            </div>
            <nav>
                <ul className="ul">
                    {/* <li>
                        <Link to="/wallet">
                            <FaWallet />
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/profile">
                            {name}
                        </Link>
                    </li>
                </ul>
            </nav>
{/*             <UserAvatar name={name} avatarUrl="URL_DEL_AVATAR_DEL_USUARIO" /> */}
        </header>
    );
};

export default Header;
