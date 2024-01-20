import React from "react";
import { styled } from 'styled-components';

const TableContainer = styled.table `
  border-collapse: collapse;
  border-spacing: 0;
  width: 500px;
  margin: 30px auto;
  border: 1px solid #ddd;
  
  thead {
   color: #fff;
   background-color: #1abc9c;
  }
  
  th, td {
    text-align: center;
    padding: 16px;
  }
    
  th:first-child, td:first-child {
    text-align: left;
  }
    
  tr:nth-child(even) {
    background-color: #f2f2f2
  }
`;

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list ? this.props.list : [],
            shuffledList: this.shuffleArray(this.props.list),
            color: 'black',
            fontWeight: 'normal',
            borderWidth: '0',
            borderColor: '#1abc9c',
            selectedElements: [],
            currentIndex: 0,
        };

        this.selectRandomElement = this.selectRandomElement.bind(this);
    };

    componentDidMount() {
        this.interval = setInterval(this.selectRandomElement, 2000);
    }

    shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    selectRandomElement() {
        const { list, shuffledList, selectedElements, currentIndex } = this.state;
        const allCount = list.length;
        const halfCount = Math.ceil(allCount / 2);
        const newSelectedElements = [...selectedElements, shuffledList[currentIndex].type];

        this.setState({
            color: '#1abc9c',
            fontWeight: 'bold',
            selectedElements: newSelectedElements,
            currentIndex: currentIndex + 1,
        });

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
    }

    render() {
        const { list, color, fontWeight, borderWidth, borderColor, selectedElements } = this.state;

        return (
            <TableContainer style={{ border: `${borderWidth} solid ${borderColor}` }}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Icon</th>
                    </tr>
                </thead>
                {list &&
                    <tbody>
                        {list.map(item =>
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
                }
            </TableContainer>
        )
    }
}

export default Table