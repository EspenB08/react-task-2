import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          add 1 to count
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          remove 1 from count
        </button>
        <button onClick={() => setCount((count) => count = 0)}>
          reset the count to 0
        </button>
      </div>
      <div className="counter">
        count is {count}
      </div>
    </>
  );
}

export default App
