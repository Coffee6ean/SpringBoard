import CountMixin from "./CountMixin";
import Counter from "./Counter";
import CounterClassBased from "./CounterClassBased";
import CounterMixin from "./CounterMixin";
import EggCounter from "./EggCounter";
import CounterUsingHOC from "./HOC/CounterUsingHOC";
import ThingCounter from "./HOC/ThingCounter";
import CounterRenderProps from "./RenderProps/CounterRenderProps";
import CounterHook from "./Hooks/CounterHook";

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <CounterClassBased color='purple' initialVal={10}/> */}
      {/* <CounterClassBased initialVal={10}/> */}
      {/*
        <CounterMixin/>
        <hr/>
        <EggCounter/>
      */}
      {/* 
        <CounterUsingHOC color='pink'/>
        <ThingCounter/>
      */}
      {/* <CounterRenderProps/> */}
      <CounterHook/>
    </div>
  );
}

export default App;
