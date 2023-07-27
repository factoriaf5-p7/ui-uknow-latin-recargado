import React from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import logoImage from '../assets/logo-uk.png';
import '../pages/StylePages/HomeNoUserPage.css'
import FooterLogin from '../components/FooterLogin/FooterLogin';

const Home: React.FC = () => {
  return (
    <div>
      <div className="logo-header">
        <img src={logoImage} alt="Logo-UK" />
      </div>
      <SearchBox />
      <FooterLogin />
    </div>
  );
};

export default Home; 
