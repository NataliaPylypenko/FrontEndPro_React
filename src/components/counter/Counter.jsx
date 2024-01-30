import React, {Component} from 'react';
import styles from './Counter.module.scss';

export class Counter extends Component {

    render() {
        return (
            <div className={styles.counter}>
                <button onClick={this.props.onClickMinusCounter}>-</button>
                <span>{this.props.counter}</span>
                <button onClick={this.props.onClickPlusCounter}>+</button>
            </div>
        );
    }
}