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
    ToDoSecond, ThemeSwitcher
} from "./components";
import React, {Component, useState} from "react";
import Controller from "./components/controller/Controller";
import ThemeContext from "./components/context/ThemeContext";
import UserContext from "./components/context/UserContext";

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
                <ThemeContext.Provider value={{ theme: this.state.theme, setTheme: this.setTheme }}>

                    <div>
                        <Header />
                        <Navbar counter={this.state.counter} />
                    </div>

                    <ThemeSwitcher />

                    <UserContext.Provider value={this.state.user}>
                        <SectionTag className="chromatic">
                            <ToDoSecond />
                        </SectionTag>

                        <SectionTag>
                            <ToDo />
                        </SectionTag>
                    </UserContext.Provider>

                    <SectionTag className="chromatic">
                        <Blocks list={this.state.list} />
                    </SectionTag>

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

                    <SectionTag>
                        {this.state.showTodoList && <TodoList list={this.state.list} />}
                    </SectionTag>

                    <SectionTag className="chromatic">
                        <Temperature />
                    </SectionTag>

                    <SectionTag>
                        <FunctionTable listAnimals={animals} title='Function Component' />
                    </SectionTag>

                    <SectionTag className="chromatic">
                        <ClassTable list={animals} title='Class Component' />
                    </SectionTag>

                    <Footer />

                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
