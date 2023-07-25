import React from 'react';
import { Link } from 'react-router-dom';
/* import { AiOutlineBook } from 'react-icons/ai'; */
import { FaBookOpen, FaSignOutAlt } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <ul>
                <li>
                    <Link to="/profile">
                        <img src="/" alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="/content">
                        <FaBookOpen size={24} color="#fff" />
                    </Link>
                </li>
                <li>
                    <Link to="/home">
                        <FaSignOutAlt size={24} color="#fff" />
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
