import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Comparison from "./components/Comparison";
import OptionOne from "./components/OptionOne";
import OptionThree from "./components/OptionThree";
import OptionTwo from "./components/OptionTwo";

function App() {
  return (
    <Router>
      <nav className="btn-all">
        {/* <Link className="btn" to="/">
          Home
        </Link> */}
        <Link className="btn option-one" to="/option_one">
          Option 1
        </Link>
        <Link className="btn option-two" to="/option_two">
          Option 2
        </Link>
        <Link className="btn option-three" to="/option_three">
          Option 3
        </Link>
        <Link className="btn" to="/summary_comparison">
          Summary Comparison
        </Link>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/option_one" element={<OptionOne />} />
        <Route path="/option_two" element={<OptionTwo />} />
        <Route path="/option_three" element={<OptionThree />} />
        <Route path="/summary_comparison" element={<Comparison />} />
      </Routes>
    </Router>
  );
}

export default App;
