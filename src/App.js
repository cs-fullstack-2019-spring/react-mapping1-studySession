import React, { Component } from 'react';
import './App.css';
// import ThreePlayerScore from "./ThreePlayerScore";
// import AddScore from "./AddScore";
// import Lists from "./Lists";
// import KeyCount from "./KeyCount";
import UserApp from "./UserApp";

class App extends Component {
  render() {
    return (
      <div>
        {/*<KeyCount/>*/}
        {/*<ThreePlayerScore/>*/}
        {/*<button>1</button>*/}
        {/*<button>5</button>*/}
        {/*<button>10</button>*/}
        {/*<AddScore amount={1}/>*/}
        {/*<AddScore amount={5}/>*/}
        {/*<AddScore amount={10}/>*/}
        {/*<Lists/>*/}
        <UserApp/>
      </div>
    );
  }
}

export default App;
