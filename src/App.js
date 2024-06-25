import "./App.css";
import { Home } from "./Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="bg-black">
      <Menu />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
