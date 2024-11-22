import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";


const PieChart = (data:any) => {
 
  const [state, setState] = useState("");
  const [activeCases, setActiveCases] = useState();
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);

  useEffect(() => {
    console.log(data.data[1])
    data.data.forEach((value:any)=>{
      setState(data.data[0]);
      setActiveCases(data.data[1]);
      setRecovered(data.data[2]);
      setDeaths(data.data[3]);
 
    })
    
  }, [data]); 

  console.log(state)
  return (
    <div>
      <Plot
        data={[
          {
            type: "pie",
            labels: ["Active Cases", "Recovered", "Deaths"],
            values: [activeCases, recovered, deaths],
            textinfo: "label+percent", 
            hoverinfo: "label+value+percent", 
          },
        ]}
        layout={{
          title: "COVID-19 Case Distribution",
          width: 600,
          height: 400,
        }}
      />
    </div>
  );
};

export default PieChart;
