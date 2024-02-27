//import logo from './logo.svg';
import './App.css';
import Dice from "./Dice";

function App() {
  return (
    <div className="App">
      <Dice numDice={4} maxVal={6} title='Roll Me!'/>
      <Dice numDice={9}/>
    </div>
  );
}

export default App;
