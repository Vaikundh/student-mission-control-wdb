import React from 'react';
import Globey from '../Components/Globe';
import NavBar from '../Components/Navbar/Navbar';
import Buttons from '../Components/Buttons';
const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <Globey />
      <Buttons type="outline" text="COurses"></Buttons>
    </div>
  );
};

export default Home;
