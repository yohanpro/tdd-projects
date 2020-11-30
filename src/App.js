
import './App.css';
import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  const increaseHandler = () => setCount(count => count += 1);
  return (
    <div data-test="component-app">
      <div>
        <h3 data-test="component-counter">counter:
        <span data-test="component-count">{count}</span>
        </h3>

      </div>
      <div className="button-container" data-test="component-btnContainer">
        <button
          className="btn btn-increase"
          data-test="component-btnIncrease"
          onClick={() => setCount(count + 1)}>더하기
          </button>
        <button
          className="btn btn-decrease"
          data-test="component-btnDecrease">빼기
          </button>
      </div>
    </div>
  );
}

export default App;
