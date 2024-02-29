import logo from './logo.svg';
import './App.css';
//import Timer from './Timer';
import TimerWrapper from './TimerWrapper';
import Counter from './Counter';
import ProfileViewer from './ProfileViewer';
import ProfileViewerWithSearch from './ProfileViewerWithSearch';

function App() {
  return (
    <div className="App">
      {/* <Timer/> */}
      {/* <Counter/> */}
      {/* <ProfileViewer name='Coffee6ean' color='orange'/> */}
      {/* <ProfileViewerWithSearch/> */}
      <TimerWrapper/>
    </div>
  );
}

export default App;
