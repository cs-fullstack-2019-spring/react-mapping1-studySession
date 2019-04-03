import React, { Component } from 'react';

class KeyCount extends Component{
    constructor(props){
        super(props);
        this.state= {
            count: 0,
        };
    }

    keyDownCount = (e)=>{
        this.setState({
            count: this.state.count+1,
        })
    };

    render(){
        // document.addEventListener('keydown', this.keyDownCount);
        return(
            <div>
                <h1>Enter Text:</h1>
                <input type="text" onKeyDown={this.keyDownCount}/>
                <h1>Key Presses: {this.state.count}</h1>
            </div>
        );
    }
}

export default KeyCount;