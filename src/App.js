import Header from "./layouts/Header";
import Table from "./components/Table/Table";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];

function App() {
  return (
    <div className='wrapper'>
      <div>
        <Header />
        <Navbar />
      </div>

      <div className="container">
        <Table list={animals}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
