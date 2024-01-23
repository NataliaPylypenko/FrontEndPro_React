import Header from "./layouts/Header";
import ClassTable from "./components/Table/ClassTable";
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
        <ClassTable list={animals}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
