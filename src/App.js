import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import {FunctionTable, ClassTable, Counter, Temperature} from "./components";
import React, {Component} from "react";

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];

class App extends Component {
    state = {
        counter: 10
    };

    onClickPlus() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    onClickMinus() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div className='wrapper'>
                <div>
                    <Header />
                    <Navbar counter={this.state.counter} />
                </div>

                <div className="section">
                    <div className="container">
                        <Counter
                            counter={this.state.counter}
                            onClickPlusCounter={this.onClickPlus.bind(this)}
                            onClickMinusCounter={this.onClickMinus.bind(this)}
                        />
                    </div>
                </div>

                <div className="section chromatic">
                    <div className="container">
                        <Temperature />
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <FunctionTable listAnimals={animals} title='Function Component' />
                    </div>
                </div>

                <div className="section chromatic">
                    <div className="container">
                        <ClassTable list={animals} title='Class Component' />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;
