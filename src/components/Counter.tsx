import { useState } from "react";

interface Properties{
    inititValue?: number;
    minValue?: number;
    maxValue?: number;
}

export function Counter({inititValue = 1, minValue = 0, maxValue = 5}: Properties) {
  const [counter, setCounter] = useState<number>(inititValue)

  const increment = () => setCounter((prev) => prev >= maxValue ? prev : prev + 1);
  const decrement = () => setCounter((prev) => prev <= minValue ?  prev : prev - 1);
  return (
    <>
     <main>
        <span>
          {counter}
        </span>
        <button onClick={increment}>
              incrementar
        </button>
        <button onClick={decrement}>
              decrementar
        </button>
     </main>
    </>
  )
}