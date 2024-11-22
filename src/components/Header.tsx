import React ,{useState}from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Header = ({ states}: { states: string[];  }) => {
    const [selectedState, setSelectedState] = useState("");
    const navigate = useNavigate();
    const handleFilter = () => {
      
      navigate("/filterpage", { state: selectedState })
      
    };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          COVID-19 Tracker
        </Typography>
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
      </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
