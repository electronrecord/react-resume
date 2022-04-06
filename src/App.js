import './App.scss';
import {LeftSide} from "./components/LeftSide"
import {RightSide} from "./components/RightSide"

function App() {
  return (
    <div className="App">
      {/* parent component */}
      <main>
        <LeftSide />
        <RightSide />
      </main>
    </div>
  );
}

export default App;
