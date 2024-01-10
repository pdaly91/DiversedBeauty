import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="h-screen bg-main-light text-main-black">
      <Header />
      <div className="h-96 mb-auto">
        <p>
          Diversed Beauty is a cosmetics line founded by two women with a passion for inclusivity and diversity. As black and brown women, we understand the importance of representation and the need for cosmetics that cater to every skin tone. Our goal is to provide a space where everyone can feel seen, valued, and included.
        </p>
        <p>
          Diversed Beauty es una línea de cosméticos fundada por dos mujeres apasionadas por la inclusión y la diversidad. Como mujeres negras y morenas, entendemos la importancia de la representación y la necesidad de cosméticos que se adapten a cada tono de piel. Nuestro objetivo es brindar un espacio donde todos puedan sentirse vistos, valorados e incluidos.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;