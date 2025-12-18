import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PosScreen from "./pages/PosScreen";
import RealTimeScreen from "./pages/RealTimeScreen";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/pos" style={{ marginRight: "10px" }}>POS System</Link>
        <Link to="/realtime">Real-time Monitor</Link>
      </nav>

      <Routes>
        <Route path="/pos" element={<PosScreen />} />
        <Route path="/realtime" element={<RealTimeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;