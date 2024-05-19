import React, { useCallback, useState } from 'react';

export default function Cau1() {
  const Counter = () => {
    const [count, setCount] = useState(0);
  
    const increment = useCallback(() => {
      setCount(prevCount => prevCount + 1);
    }, []);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }

  return (
    <div>
      Câu 1
      <Counter />
    </div>
  );
}
