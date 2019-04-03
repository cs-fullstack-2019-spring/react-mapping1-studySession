import React, { Component } from 'react';
import UserMapping from "./UserMapping";

class UserApp extends Component{

    render(){
        const rawData = require('./rawData');

        return(
            <UserMapping array={rawData}/>
        );
    }
}

export default UserApp;