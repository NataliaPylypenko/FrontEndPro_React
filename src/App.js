import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import {
    FunctionTable,
    ClassTable,
    Counter,
    Temperature,
    TodoList,
    Blocks,
    SectionTag,
    ToDo,
    ToDoSecond, ThemeSwitcher, CountryWeather
} from "./components";
import React, {Component, useState} from "react";
import Controller from "./components/controller/Controller";
import ThemeContext from "./components/context/ThemeContext";
import UserContext from "./components/context/UserContext";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];

class App extends Component {

    state = {
        theme: 'light',
        user: 'Mike',
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

    setTheme = theme => {
        this.setState({ theme });
    };

    setUser = user => {
        this.setState({ user });
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
                <Router>
                    <Header />
                    <Navbar counter={this.state.counter} />

                    <Switch>
                        <ThemeContext.Provider value={{ theme: this.state.theme, setTheme: this.setTheme }}>
                            <Route path="/" exact>
                                <SectionTag>
                                    <CountryWeather />
                                </SectionTag>
                            </Route>

                            <Route path="/todoTheme">
                                <ThemeSwitcher />

                                <UserContext.Provider value={this.state.user}>
                                    <SectionTag className="chromatic">
                                        <ToDoSecond />
                                    </SectionTag>

                                    <SectionTag>
                                        <ToDo />
                                    </SectionTag>
                                </UserContext.Provider>
                            </Route>

                            <Route path="/blocks">
                                <SectionTag className="chromatic">
                                    <Blocks list={this.state.list} />
                                </SectionTag>
                            </Route>

                            <Route path="/counter">
                                <SectionTag>
                                    <Counter
                                        counter={this.state.counter}
                                        onClickPlusCounter={this.onClickPlus.bind(this)}
                                        onClickMinusCounter={this.onClickMinus.bind(this)}
                                    />
                                </SectionTag>

                                <SectionTag className="chromatic">
                                    <Controller />
                                </SectionTag>
                            </Route>

                            <Route path="/todo">
                                <SectionTag>
                                    {this.state.showTodoList && <TodoList list={this.state.list} />}
                                </SectionTag>
                            </Route>

                            <Route path="/temperature">
                                <SectionTag className="chromatic">
                                    <Temperature />
                                </SectionTag>
                            </Route>

                            <Route path="/table">
                                <SectionTag>
                                    <FunctionTable listAnimals={animals} title='Function Component' />
                                </SectionTag>

                                <SectionTag className="chromatic">
                                    <ClassTable list={animals} title='Class Component' />
                                </SectionTag>
                            </Route>
                        </ThemeContext.Provider>
                    </Switch>

                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
