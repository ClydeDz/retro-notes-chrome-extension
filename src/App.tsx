import "./styles/App.css";
import RnUserInput from "./components/RnUserInput";
import { Elements } from "./constants/Elements";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Elements.map(element => {
            return (
              <div className="col" key={element.componentKey}>
                <RnUserInput text={element.text} componentKey={element.componentKey} />
              </div>
            );
        })}
      </header>
    </div>
  );
}

export default App;
