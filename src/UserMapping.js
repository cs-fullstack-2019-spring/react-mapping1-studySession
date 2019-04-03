import React, { Component } from 'react';
import UserDesign from "./UserDesign";

class UserMapping extends Component{
    render(){
        const userMap = this.props.array.map(
            (eachOne)=>{
                return(
                    <UserDesign eachOne={eachOne}/>
                )
            }
        );
        return(
            <p>{userMap}</p>
        );
    }
}

export default UserMapping;