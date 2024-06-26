import React from 'react';
import Screen from './MainScreen/Screen';
import Block from './SecondScreen/Block'
import Learn from './FourScreen/Learn';
import FAQ from './SixthScreen/FAQ';
import Footer from './Footer/Footer';
import Cards from './Cards/Cards';


const Home = () => {
  return (
      <div className='container mx-auto'>
        <Screen />
        <Block />  
        <Cards />
        <Learn />
        <FAQ />
        <Footer />
    </div>
  );
};

export default Home;
