import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import CitiesSaved from "./CitiesSaved/CitiesSaved";
import FormSub from "./FormSub/FormSub";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Menu /> 
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/weatherApp" element={<Search />} />
            <Route path="/CitiesSaved" element={<CitiesSaved />} />
            <Route path="*" element={<Search />} />
          </Routes>
        </Router>

        <FormSub />

      </div>
    </>
  );
}

export default App;
