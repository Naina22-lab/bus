import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusBooking from "./components/BusBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busbook" element={<BusBooking />} />
      </Routes>
    </Router>
  );
}

export default App;