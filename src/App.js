import "./App.css";
// Hooks
import { useEffect, useState } from "react";

// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
//components
import Header from "./components/Header";
// Pages
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharactersId from "./pages/Characters-id";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const [token, setToken] = useState("");
  const [tokenPresent, setTokenPresent] = useState(false);

  useEffect(() => {
    const tokenUser = Cookies.get("bearerToken");
    setToken(tokenUser);
    // eslint-disable-next-line
  }, [tokenPresent]);
  return (
    <Router>
      <div className="App">
        <Header
          bearerToken={token}
          setBearerPresent={setTokenPresent}
          bearerPresent={tokenPresent}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<CharactersId />} />
          <Route
            path="/login"
            element={
              <Login setBearerPresent={setTokenPresent} bearerToken={token} />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                setBearerPresent={setTokenPresent}
                bearerPresent={tokenPresent}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
