import { useState, memo } from "react";

import { delay } from "@/utils";

export default memo(function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <h2>{counter}</h2>

      <button
        onClick={async () => {
          // async
          // const { delay } = await import("@/utils");
          await delay(2);
          setCounter(counter + 1);
        }}
      >
        +1
      </button>

      <input type="text" />
    </>
  );
});