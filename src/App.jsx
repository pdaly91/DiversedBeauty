import { useState } from 'react';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App;