import React, {Component} from 'react';
import BlockItem from "./BlockItem";

// const actions = {
//     firstList : [
//         {id: 1, text: "Transfer first to right", action: 'transferToSecond'},
//     ],
//     secondList : [
//         {id: 1, text: "Transfer first to left", action: 'transferToFirst'},
//         {id: 2, text: "Transfer first to right", action: 'transferToThird'},
//     ],
//     thirdList : [
//         {id: 1, text: "Remove last item", action: 'removeLastItem'},
//     ]
// };

export class Blocks extends Component {
    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: []
    };

    transferToSecond() {
        console.log(1);
    };
    transferToFirst() {}
    transferToThird() {}
    removeLastItem() {}

    render() {
        return (
            <div style={{display:'flex',justifyContent: 'space-between',gap:'30px', width:'800px', margin:'0 auto'}}>
                <BlockItem
                    list={this.state.firstList}
                    actions={[
                        {id: 1, text: "Transfer first to right", action: this.transferToSecond.bind(this)},
                    ]}
                />
                <BlockItem
                    list={this.state.secondList}
                    actions={[
                        {id: 2, text: "Transfer first to left", action: this.transferToFirst.bind(this)},
                        {id: 3, text: "Transfer first to right", action: this.transferToThird.bind(this)},
                    ]}
                />
                <BlockItem
                    list={this.state.thirdList}
                    actions={[
                        {id: 4, text: "Remove last item", action: this.removeLastItem.bind(this)},
                    ]}
                />
            </div>
        );
    }
}