   import { useState } from "react";
   export  const Value = () => {
   

  const [count, setCount] = useState(0);
    return (
      <>
        <div className="buttons">
          <button className="buttonIncrement" onClick={() => setCount((count) => count + 1)}>
            add 1 to count
          </button>
          <button className="buttonDecrimate" onClick={() => setCount((count) => count - 1)}>
            remove 1 from count
          </button>
          <button className="buttonReset" onClick={() => setCount((count) => (count = 0))}>
            reset the count to 0
          </button>
        </div>
        <div className="counter">count is {count}</div>
        
      </>
    );
   }
