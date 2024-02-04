import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button style={{padding:'3px 6px',margin:'0 5px'}}>{this.props.children}</button>
        );
    }
}

export default Button;