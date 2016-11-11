import React, {Component, PropTypes} from 'react';
import Chat from 'app/components/chat/chat';

class App extends Component {
  render() {
    return (
      <div style={{width:"100%", height:"100%"}}>
        <Chat />
      </div>
    )
  }
}

export default App;