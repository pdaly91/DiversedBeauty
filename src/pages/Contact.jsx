import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Contact = () => {
  return (
    <div className="h-screen bg-main-light text-main-black">
      <Header />
      <div className="h-96 mb-auto">
        This is the Contact page
      </div>
      <Footer />
    </div>
  )
};

export default Contact;