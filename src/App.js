import './App.css';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Footer from "./components/Footer";

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <Table list={animals}/>
      </div>

      <Footer />
    </>
  );
}

export default App;
