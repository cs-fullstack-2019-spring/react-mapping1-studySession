import React, { Component } from 'react';

class EachName extends Component{
    render(){
        return(
            <div>
                <p>Their name is:</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default EachName;