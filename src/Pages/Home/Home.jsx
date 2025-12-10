
import React, { useState } from 'react';
import Navbar from '../../Components/Home/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Brand from '../../Components/Brand/Brand';
import Deal from '../../Components/Deal/Deal';
import NewArrival from '../../Components/NewArrival/NewArrival';
import Blinder from '../../Components/Blinder/Blinder';
import FollowUs from '../../Components/FollowUs/FollowUs';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';



function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Banner darkMode={darkMode} />
      <Brand darkMode={darkMode} />
      <Deal darkMode={darkMode} />
      <NewArrival darkMode={darkMode} />
      <Blinder darkMode={darkMode} />
      <FollowUs darkMode={darkMode} />
      <NewsLetter darkMode={darkMode} />
     




    </div>
  );
}

export default Home;
