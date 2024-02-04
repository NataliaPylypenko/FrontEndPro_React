import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import {FunctionTable, ClassTable, Counter, Temperature, TodoList, Blocks} from "./components";
import React, {Component} from "react";
import Controller from "./components/controller/Controller";

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];

class App extends Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             showTodoList: false,
    //         })
    //     }, 3000)
    //
    //     // clearInterval()
    //     // clearTimeout()
    //     // removeEventListener()
    // }

    state = {
        counter: 10,
        list: [
            {
                id: 1,
                title: 'Task1',
                completed: true
            },
            {
                id: 2,
                title: 'Task2',
                completed: false
            },
            {
                id: 3,
                title: 'Task3',
                completed: false
            },
            {
                id: 4,
                title: 'Task4',
                completed: false
            },
            {
                id: 5,
                title: 'Task5',
                completed: false
            },
            {
                id: 6,
                title: 'Task6',
                completed: true
            },
            {
                id: 7,
                title: 'Task7',
                completed: false
            },
            {
                id: 8,
                title: 'Task8',
                completed: false
            },
            {
                id: 9,
                title: 'Task9',
                completed: false
            },
            {
                id: 10,
                title: 'Task10',
                completed: false
            }
        ],
        showTodoList: true,
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

                <div className="section chromatic">
                    <div className="container">
                        <Blocks list={this.state.list} />
                    </div>
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
                        <Controller />
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        {this.state.showTodoList && <TodoList list={this.state.list} />}
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
