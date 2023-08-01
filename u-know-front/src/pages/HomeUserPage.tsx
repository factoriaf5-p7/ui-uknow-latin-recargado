import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchBox from "../components/SearchBox/SearchBox";
import ShowContent from "../components/ShowContent/ShowContent";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <ShowContent courses={undefined} />
      <Footer />
    </div>
  );
};

export default Home;
