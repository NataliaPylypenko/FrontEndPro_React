import React, {Component} from 'react';
import Button from "./Button";
import ListItem from "./ListItem";

class BlockItem extends Component {
    render() {
        const {list, actions} = this.props;

        return (
            <div style={{border: '1px solid black', padding:'20px', minWidth:'200px',display: 'flex', flexDirection: 'column'}}>
                <ul style={{marginBottom:'20px'}}>
                    {list.map(item => (
                        <ListItem
                            key={item.id}
                            title={item.title}
                        />
                    ))}
                </ul>

                <div style={{marginTop:'auto'}}>
                    {list.length
                        ? actions.map(item => (
                            <Button key={item.id} onClick={item.action}>
                                {item.text}
                            </Button>
                        ))
                        : ''
                    }
                </div>
            </div>
        );
    }
}

export default BlockItem;