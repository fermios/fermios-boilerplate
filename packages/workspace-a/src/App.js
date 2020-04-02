import React from 'react';

class App extends React.Component {
  state = {
    test: 0
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={() => this.setState({ test: this.state.test + 1})}>
          {this.state.test}
        </button>
      </div>
    );
  }
}

export default App;