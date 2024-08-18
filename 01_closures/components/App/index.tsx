"use client";

import { memo, useState } from "react";
import { HeavyComponent } from "../HeavyComponent";

const HeavyComponentMemo = memo(HeavyComponent, (before, after) => {
  return before.title === after.title;
});

export function App() {
  const [value, setValue] = useState<string>();

  const onClick = () => {
    // submit stuff to the backend
    console.log(value);
  };

  return (
    <div className="App">
      <h1>Closures example</h1>

      <>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <HeavyComponentMemo title="Welcome closures" onClick={onClick} />
      </>
    </div>
  );
}
