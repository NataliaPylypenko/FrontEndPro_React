import React, {Component} from 'react';
import classes from './Todo.module.scss'

class TodoItem extends Component {
    // componentDidMount() {
    //     console.log('TodoItem componentDidMount');
    // }
    //
    // componentDidUpdate() {
    //     console.log('TodoItem componentDidUpdate');
    // }
    //
    // componentWillUnmount() {
    //     console.log('TodoItem componentDidUpdate');
    // }

    render() {
        let {
            item: {title, completed},
            handleCompleteTask,
            handleCloseTask
        } = this.props;

        return (
            <li className={completed ? classes.item + ' ' + classes.completed : classes.item}>
                <p>{title}</p>
                {completed
                    ? <button className={classes.btn} onClick={handleCloseTask}>x</button>
                    : <button className={classes.btn} onClick={handleCompleteTask}>Completed</button>
                }
            </li>
        );
    }
}

export default TodoItem;