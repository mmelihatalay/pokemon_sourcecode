import BoxFrame from "./components/BoxFrame";
import PokeDetail from "./components/PokeDetail";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [pokeInfo, setPokeInfo] = useState([]);
  const getPokeDetail = (detail) => {
    setPokeInfo(detail);
  };

  return (
    <Router>
      <div>
        <Route path="/" exact>
          <BoxFrame onPokeDetail={getPokeDetail} />
        </Route>

        <Route path="/:id">
          <PokeDetail pokeInf={pokeInfo} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
