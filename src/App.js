import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Comparison from "./components/Comparison";
import OptionOne from "./components/OptionOne";
import OptionTwo from "./components/OptionTwo";
import OptionThree from "./components/OptionThree";
import Navigation from "./utils/Navigation";

function App() {
  const isOptionOneCalculated = useSelector(
    (state) => state.calculatedValues.OptionOne.isCalculated
  );
  const isOptionTwoCalculated = useSelector(
    (state) => state.calculatedValues.OptionTwo.isCalculated
  );
  const isOptionThreeCalculated = useSelector(
    (state) => state.calculatedValues.OptionThree.isCalculated
  );
  const allOptionsCalculated =
    isOptionOneCalculated && isOptionTwoCalculated && isOptionThreeCalculated;

  return (
    <Router>
      <Navigation allOptionsCalculated={allOptionsCalculated} />

      <Routes>
        <Route path="/option_one" element={<OptionOne />} />
        <Route path="/option_two" element={<OptionTwo />} />
        <Route path="/option_three" element={<OptionThree />} />
        <Route path="/summary_comparison" element={<Comparison />} />
      </Routes>
    </Router>
  );
}

export default App;
