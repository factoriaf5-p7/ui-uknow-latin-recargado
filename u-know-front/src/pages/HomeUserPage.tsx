import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SearchBox from '../components/SearchBox/SearchBox';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <Footer />
    </div>
  );
};

export default Home;
