import React, { Component } from 'react';
import './App.css';
import AddScore from "./AddScore";

class ThreePlayerScore extends Component{
    render(){
        return(
            <div className="App">
                <AddScore amount={1}/>
                <AddScore amount={2}/>
                <AddScore amount={4}/>
            </div>
        );
    }
}

export default ThreePlayerScore;