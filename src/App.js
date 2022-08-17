import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
// Pages
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharactersId from "./pages/Characters-id";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<CharactersId />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
