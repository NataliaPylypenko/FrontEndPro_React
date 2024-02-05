import React, {Component} from 'react';
import BlockItem from "./BlockItem";

export class Blocks extends Component {
    actions = {
        firstList : [
            {id: 1, text: "Transfer first to right", action: this.transferToSecond.bind(this)},
        ],
        secondList : [
            {id: 1, text: "Transfer first to left", action: this.transferToFirst.bind(this)},
            {id: 2, text: "Transfer first to right", action: this.transferToThird.bind(this)},
        ],
        thirdList : [
            {id: 1, text: "Remove last item", action: this.removeLastItem.bind(this)},
        ]
    };

    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: []
    };

    transferToSecond() {
        this.setState({
            firstList: this.state.firstList.slice(1),
            secondList: [this.state.firstList[0], ...this.state.secondList],
        })
    };
    transferToFirst() {
        this.setState({
            firstList: [this.state.secondList[0], ...this.state.firstList],
            secondList: this.state.secondList.slice(1),
        })
    }
    transferToThird() {
        this.setState({
            secondList: this.state.secondList.slice(1),
            thirdList: [this.state.secondList[0], ...this.state.thirdList],
        })
    }
    removeLastItem() {
        this.setState({
            thirdList: this.state.thirdList.slice(1),
        })
    }

    render() {
        return (
            <div style={{display:'flex',justifyContent: 'space-between',gap:'30px', width:'800px', margin:'0 auto'}}>
                <BlockItem
                    list={this.state.firstList}
                    actions={this.actions.firstList}
                />
                <BlockItem
                    list={this.state.secondList}
                    actions={this.actions.secondList}
                />
                <BlockItem
                    list={this.state.thirdList}
                    actions={this.actions.thirdList}
                />
            </div>
        );
    }
}