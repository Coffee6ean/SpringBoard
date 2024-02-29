import logo from './logo.svg';
import './App.css';
import MoodClicker from './MoodClicker';
import ColorPicker from './ColorPicker';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <ColorPicker/>
      <Counter/>
      <MoodClicker/>
    </div>
  );
}

export default App;
