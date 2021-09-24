import React from 'react';
import axios from 'axios';
import Header from './header/header';
import Mailbox from './mailbox/mailbox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'mrgunyan1',
      boxes: [true, false, false]
    }
    this.changeBoxes = this.changeBoxes.bind(this);
  }

  changeBoxes(box) {
    const newBoxes = [false, false, false];
    newBoxes[box] = true;
    this.setState({ boxes: newBoxes });
  }

  render() {
    const { username, boxes } =  this.state;
    return (
      <div className="page">
        <Header username={username} boxes={boxes} changeBoxes={this.changeBoxes} />
        <Mailbox boxes={boxes} />
      </div>
    );
  }
}

export default App;
