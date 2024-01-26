import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Comparison from "./components/Comparison";
import OptionOne from "./components/OptionOne";
import OptionTwo from "./components/OptionTwo";
import OptionThree from "./components/OptionThree";
import Navigation from "./utils/Navigation";
import { CalculationProvider } from "./utils/CalculationContext";

function App() {
  return (
    <CalculationProvider>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/option_one" element={<OptionOne />} />
          <Route path="/option_two" element={<OptionTwo />} />
          <Route path="/option_three" element={<OptionThree />} />
          <Route path="/summary_comparison" element={<Comparison />} />
        </Routes>
      </Router>
    </CalculationProvider>
  );
}

export default App;
