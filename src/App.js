import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Comparison from "./components/Comparison";
import OptionOne from "./components/OptionOne";
import OptionTwo from "./components/OptionTwo";
import OptionThree from "./components/OptionThree";
import Navigation from "./utils/Navigation";
import { CalculationProvider } from "./utils/CalculationContext";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <CalculationProvider>
      <Router>
        <div className="main-container">
          <Header />
          <Navigation />
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/option_one" />} />
              <Route path="/option_one" element={<OptionOne />} />
              <Route path="/option_two" element={<OptionTwo />} />
              <Route path="/option_three" element={<OptionThree />} />
              <Route path="/summary_comparison" element={<Comparison />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CalculationProvider>
  );
}

export default App;
