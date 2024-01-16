import './App.css';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Side from "./components/Side";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="row">
        <Side />
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;
