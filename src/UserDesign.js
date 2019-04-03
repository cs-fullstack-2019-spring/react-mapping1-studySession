import React, { Component } from 'react';

class UserDesign extends Component{
    render(){
        return(
            <div>
                <p>ID: {this.props.eachOne._id}</p>
                <p>isActive: {this.props.eachOne.isActive}</p>
                <p>balance: {this.props.eachOne.balance}</p>
                <p>name: {this.props.eachOne.name}</p>
                <p>gender: {this.props.eachOne.gender}</p>
                <hr/>
            </div>
        );
    }
}

export default UserDesign;