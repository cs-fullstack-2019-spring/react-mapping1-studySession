import React, { Component } from 'react';
import EachName from "./EachName";

class ListMapping extends Component{
    render(){
        console.log(this.props.array);

        const arrayMapping = this.props.array.map(
            (eachElement)=>{
                return(<EachName name={eachElement}/>);
            }
        );

        return(
            <h1>{arrayMapping}</h1>
        );
    }
}

export default ListMapping;