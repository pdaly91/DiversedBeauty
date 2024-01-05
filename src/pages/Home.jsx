import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-96 mb-auto">
        This is the HOME PAGE
      </div>
      <Footer />
    </div>
  );
};

export default Home;