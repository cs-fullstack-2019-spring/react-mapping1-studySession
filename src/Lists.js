import React, { Component } from 'react';
import ListMapping from "./ListMapping";

class Lists extends Component{

    render(){
        const nameArray = ["Kenn", "Kevin", "Erin"];

        return(
            <ListMapping array={nameArray}/>
        );
    }
}

export default Lists;