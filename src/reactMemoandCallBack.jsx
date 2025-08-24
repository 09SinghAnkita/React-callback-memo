import React, { useState, useCallback, memo } from "react";

const ExpensiveChild = memo(({ buttonClick, title }) => {
  console.log(`${title} component rendered`);

  return (
    <div>
      <h3> {title} </h3>
      <span>I log when I rerender </span>
      <button onClick={buttonClick}> Click me! </button>
    </div>
  );
});

export default function CallbackExample() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const handleClickWithoutCallback = () => {
    console.log("Click without callback");
  };

  const handleClickWithCallback = useCallback(() => {
    console.log("With call back");
  }, []);

  return (
    <>
      <h2> CallBack Examples </h2>
      <button onClick={() => setCount(count + 1)}> Count : {count}</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        {" "}
        otherState : {otherState}
      </button>

      <ExpensiveChild
        title="Without callback"
        buttonClick={handleClickWithoutCallback}
      />

      <ExpensiveChild
        title="With  callback"
        buttonClick={handleClickWithCallback}
      />
    </>
  );
}
