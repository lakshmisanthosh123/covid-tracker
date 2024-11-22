import React ,{useState}from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate,useLocation } from "react-router-dom";
const Header = ({ states}: { states: string[];  }) => {
    const [selectedState, setSelectedState] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const handleFilter = () => {
      
      navigate("/filterpage", { state: selectedState })
      
    };
    const goToHome = () => {
      navigate('/'); 
    };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          COVID-19 Tracker
        </Typography>
        {isHomePage?
        <div className="filter-container">
        <label htmlFor="stateFilter">Filter By State: </label>
        <select onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Select a State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <button onClick={handleFilter}>Filter</button>
      </div>:<button onClick={goToHome}>Go to Home Page</button>}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
