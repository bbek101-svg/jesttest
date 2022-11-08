import Button from "./Button";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);
  const increment = () => {
    setCount(count + 1);
    if (count > 100) {
      setCount(0);
    }
  };

  const decrement = () => {
    setCount(count - 1);
    if (count < -100) {
      setCount(0);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const handleInput = (e) => {
    setCount(parseInt(count) + parseInt(add));
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setAdd(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center p-24 rounded-xl border-4 border-[#00ff87]">
        <div className="flex flex-row mb-8">
          <h1>Counter: </h1>
          <h1 className="ml-2" data-testid="counter">
            {count}
          </h1>
        </div>

        <div className="flex flex-row">
          <Button Sign="+" onClick={increment} />
          <Button Sign="-" onClick={decrement} />
          <Button Sign="Reset" onClick={reset} />
        </div>

        <div className="flex flex-row">
          <form onSubmit={handleInput}>
            <div className="flex flex-row justify-center items-center">
              <input
                type="number"
                name="add"
                id="number"
                onChange={handleChange}
                className="px-8 py-4 border-[#00FF87] border-2 rounded-lg mr-4"
                placeholder="Enter to add"
              />

              <button
                type="submit"
                className="flex justify-center items-center py-4 px-8 rounded-lg cursor-pointer bg-[#00FF87] text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Counter;
