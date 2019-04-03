import React, { Component } from 'react';

class AddScore extends Component{
    constructor(props){
        super(props);
        this.state = {
            score: 0,
        };
    }

    addNumber = (e)=>{
        this.setState({
            score: this.state.score + this.props.amount
        })
    };

    render(){
        return(
            <div>
                <h1>Score: {this.state.score}</h1>
                <h1>Add {this.props.amount}</h1>
                <button onClick={this.addNumber}>Press Me</button>
            </div>
        );
    }
}

export default AddScore;