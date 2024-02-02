import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import classes from './Todo.module.scss'

export class TodoList extends Component {
    // componentDidMount() {
    //     console.log('TodoList componentDidMount');
    // }
    //
    // componentDidUpdate() {
    //     console.log('TodoList componentDidUpdate');
    // }
    //
    // componentWillUnmount() {
    //     console.log('TodoList componentWillUnmount');
    // }

    state = Object.assign({}, this.props);

    handleCompleteTask(index) {
        console.log('handleCompleteTask', index);

        this.setState({
            list: this.state.list.map((item, i) => {
                if (i === index) item.completed = true;
                return item;
            })
        })
    }

    handleCloseTask(index) {
        console.log('handleCloseTask', index);

        this.setState({
            list: this.state.list.filter((item, i) => i !== index)
        })
    }

    render() {
        return (
            this.state.list.length ? (
                <>
                    <h2 style={{textAlign:'center',marginBottom:'20px'}}>Todo List</h2>
                    <ul className={classes.items}>
                        {this.state.list.map((item, index) => (
                            <TodoItem
                                key={item.id}
                                item={item}
                                handleCompleteTask={this.handleCompleteTask.bind(this, index)}
                                handleCloseTask={this.handleCloseTask.bind(this, index)}
                            />
                        ))}
                    </ul>
                </>
            ) : ('')
        );
    }
}

export default TodoList;