import "./styles/App.css";
import RnUserInput from "./components/RnUserInput";
import { Elements } from "./constants/Elements";
import RnFooter from "./components/RnFooter";
import RnHeader from "./components/RnHeader";

function App() {
  return (
    <div className="app">
      <RnHeader />
      <main>
        {Elements.map(element => {
            return (
              <div className="col" key={element.componentKey}>
                <RnUserInput text={element.text} componentKey={element.componentKey} />
              </div>
            );
        })}
      </main>
      <RnFooter />
    </div>
  );
}

export default App;
