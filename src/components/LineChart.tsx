import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const SimpleChart = (data:any) => {
  const [state, setState] = useState("");
  const [activeCases, setActiveCases] = useState();
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);

  useEffect(() => {
   
    data.data.forEach((value:any)=>{
      setState(data.data[0]);
      setActiveCases(data.data[1]);
      setRecovered(data.data[2]);
      setDeaths(data.data[3]);
 
    })
    
  }, [data]); 
  
  return (
    <div>
    <Plot
      data={[
        {
          x: ["Active Cases", "Recovered", "Deaths"],
          y: [activeCases, recovered, deaths],
          type: "bar",
          marker: { color: "blue" },
        },
      ]}
      layout={{ title: "COVID Data", xaxis: { title: "Category" }, yaxis: { title: "Count" } }}
    />
    </div>
  );
};

export default SimpleChart;
