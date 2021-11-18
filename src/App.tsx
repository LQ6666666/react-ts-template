import { useState, memo } from 'react';

import { delay } from '@/utils';

import img from '@/assets/images/test.png';
import img1 from '@/assets/images/123.gif';

const App = memo(() => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <h2>{counter}</h2>
      <img src={img} alt="" />
      <img src={img1} alt="" />

      <button
        onClick={async () => {
          await delay(2);
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
    </>
  );
});

export default App;
