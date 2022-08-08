import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Comics />} /> */}
          <Route
            path="/user/register"
            // element={<Register setUser={setUser} />}
          />
          {/* <Route path="/user/login" element={<Login setUser={setUser} />} /> */}

          {/* <Route path="/characters" element={<Characters />} /> */}
          {/* <Route path="/character/:characterId" element={<CharactersId />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;