import React, { useMemo, useState } from 'react';

export default function Cau4() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    setRandomNumber(Math.random());
  };

  const memoizedRandomNumber = useMemo(() => randomNumber, [randomNumber]);

  return (
    <div>
      Câu 4
      <p>Number random: {memoizedRandomNumber}</p>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
}
