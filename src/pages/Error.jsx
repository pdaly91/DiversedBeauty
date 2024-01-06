import { useRouteError } from "react-router-dom";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div className="flex flex-col h-64 text-center justify-center items-center gap-8">
        <h1 className="text-3xl font-light">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  )
};

export default Error;