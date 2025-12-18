import { BrowserRouter as Router, Routes, Route, Link , useLocation} from "react-router-dom";
import OrderScreen from "./pages/OrderScreen";
import RealTimeScreen from "./pages/RealTimeScreen";

function Navigation() {
  const location = useLocation();

  const renderTitle = () => {
    if (location.pathname === "/order") {
      return (
        <>
          Simple POS System - <span style={{ color: "#FF3131" }}>Order Screen</span>
        </>
      );
    }
    if (location.pathname === "/realtime") {
      return (
        <>
          Simple POS System - <span style={{ color: "#FF3131" }}>Realtime Screen</span>
        </>
      );
    }
    return "Simple POS System";
  };

  return (
    <nav style={navStyle}>

    <h1 style={titleStyle}>{renderTitle()}</h1>

      {location.pathname === "/" && (
    <div style={buttonStyle}>
      <Link to="/order" style={linkStyle}>To Order Screen</Link>
      <Link to="/realtime" style={linkStyle}>To Realtime Screen</Link>
    </div>
      )}

      {location.pathname === "/order" && (
        <div style={buttonStyle}>
        <Link to="/realtime" style={linkStyle}>To Realtime Screen</Link>
        </div>
      )}

      {location.pathname === "/realtime" && (
       <div style={buttonStyle}>
        <Link to="/order" style={linkStyle}>To Order Screen</Link>
        </div>
      )}
    </nav>
  );
}

function App() {

  return (
    <Router>
      <div style={containerStyle}>

        <Navigation />

        <div style={{ width: "100%", marginTop: "20px" }}>
          <Routes>
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/realtime" element={<RealTimeScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const containerStyle = {
  backgroundColor: "#000",       
  color: "#32CD32",           
  minHeight: "100vh",      
  minWidth: "100vw",    
  display: "flex",
  flexDirection: "column",    
  alignItems: "center",      
  padding: "20px",
};

const titleStyle = {
  fontSize: "1.5rem",
  marginBottom: "20px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  borderBottom: "2px solid #32CD32",
  paddingBottom: "10px",
  textAlign: "center",
};

const navStyle = {
  display: "flex",     
  padding: "20px 0",
  flexDirection: "column",  
  justifyContent: "center",
  textAlign: "center",
};

const buttonStyle = {
  display: "flex",       
  justifyContent: "center",
  gap: "100px",
};

const linkStyle = {
  color: "#ffff",               
  backgroundColor: "#32CD32",  
  padding: "10px 25px",
  textDecoration: "none",      
  borderRadius: "5px",        
  fontWeight: "bold",
  fontSize: "1.1rem",        
  border: "2px solid #32CD32"
};

export default App;