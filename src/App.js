import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import Banner from "./Components/Banner/Banner";
import BusWrapper from "./Components/BusWrapper/BusWrapper";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <BusWrapper />
    </div>
  );
}

export default App;
