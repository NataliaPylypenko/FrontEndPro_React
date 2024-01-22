import React from "react";
import styles from './Table.module.css';
import {shuffle} from "../../utils/shuffle";

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list || [],
            randomIndexArray: this.shuffleArray(this.props.list) || [],
            selectedElements: [],
            color: 'black',
            fontWeight: 'normal',
            borderWidth: '0',
            borderColor: '#1abc9c',
        };
    };

    componentDidMount() {
        this.interval = setInterval(this.selectRandomElement, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    shuffleArray = (array) => shuffle([...Array(array.length).keys()]);

    selectRandomElement = () => {
        const { list, randomIndexArray, selectedElements } = this.state;
        const nextIndex = randomIndexArray.shift();
        const newSelectedElements = [...selectedElements, list[nextIndex].type];

        this.setState({
            color: '#1abc9c',
            fontWeight: 'bold',
            selectedElements: newSelectedElements,
        });

        const allCount = list.length;
        const halfCount = Math.ceil(allCount / 2);

        if (newSelectedElements.length >= halfCount) {
            this.setState({
                borderWidth: '10px',
            });
        }

        if (newSelectedElements.length === allCount) {
            this.setState({
                borderWidth: '20px',
            });
            clearInterval(this.interval);
        }
    };

    render() {
        const { list, color, fontWeight, borderWidth, borderColor, selectedElements } = this.state;

        return (
            <table className={styles.table} style={{ border: `${borderWidth} solid ${borderColor}` }}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Icon</th>
                    </tr>
                </thead>
                <tbody>
                {list?.map(item =>
                    <tr
                        key={item.type}
                        style={{
                            color: selectedElements.includes(item.type) ? color : 'black',
                            fontWeight: selectedElements.includes(item.type) ? fontWeight : 'normal',
                        }}
                    >
                        <td>{item.type}</td>
                        <td>{item.icon}</td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}

export default Table