import { Link } from 'react-router-dom';
import { FaBookOpen, FaSignOutAlt } from 'react-icons/fa';
import './Footer.css';
import UserAvatar from '../UserAvatar/UserAvatar';

const Footer: React.FC = () => {
    return (
        <footer>
            <ul>
                <li className="App">
                    <UserAvatar className="userAvatar" src="https://www.kindpng.com/picc/m/270-2706266_kepala-nobita-png-nobita-3d-head-png-transparent.png" alt="avatar"/>
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
