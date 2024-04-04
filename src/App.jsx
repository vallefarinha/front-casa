import Router from "./configuration/Router.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-grow">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default App;