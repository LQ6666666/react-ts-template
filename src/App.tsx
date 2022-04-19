import { useState, memo } from "react";

export default memo(function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <h2>{counter}</h2>

      <button
        onClick={async () => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
    </>
  );
});
