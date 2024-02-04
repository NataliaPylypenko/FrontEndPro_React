import React, {Component} from 'react';

class ListItem extends Component {
    render() {
        return (
            <li style={{listStyleType: 'none', margin: '0', padding: 0}}>
                <p>{this.props.title}</p>
            </li>
        );
    }
}

export default ListItem;