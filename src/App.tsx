import React, { useState } from 'react';

const App = React.memo(() => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
});

export default App;
