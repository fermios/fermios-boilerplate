import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

function App () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello World!</h1>

      <h3 className={count > 3 ? 'warning' : null}>{count}</h3>

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default hot(module)(App);