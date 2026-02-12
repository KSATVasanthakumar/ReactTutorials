import React from "react";
// import CounterStateDemo from "./CounterStateDemo";
// import CounterReducerDemo from "./CounterReducerDemo";
import CounterReducerwithInit from "./COunterReducerwithInit";

function reducervsstate() {
  return (
    <div>
      {/* <CounterStateDemo /> */}
      {/* <CounterReducerDemo /> */}
      <CounterReducerwithInit initialCount={10} />
    </div>
  );
}

export default reducervsstate;
