import Counter from "./Counter";
import CounterClassBased from "./CounterClassBased";

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <CounterClassBased color='purple' initialVal={10}/>
      <CounterClassBased initialVal={10}/>
    </div>
  );
}

export default App;
