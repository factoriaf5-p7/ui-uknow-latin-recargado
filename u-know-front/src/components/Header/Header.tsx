import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/home-user">
                    <img src="/" alt="" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/wallet">
                            W
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            P
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
