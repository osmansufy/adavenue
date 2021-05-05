import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Objectives from "./Components/Objectives/Objectives";
import Why from "./Components/WhyAdvertise/Why";
import Clients from "./Components/ClientsTrusted/Clients";

function App() {
  return (
    <div className="App">
      <Objectives />
      <Why />
      <Clients />
    </div>
  );
}

export default App;
