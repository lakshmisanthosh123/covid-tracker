import React, { useState,useEffect } from "react";
import Footer from "../components/Footer";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import MapView from "../components/MapView";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchStateCovidData } from "../redux/actions/filterAction";
import Header from "../components/Header";
const FilterPage = (state:any) => {
  const [selectedData, setSelectedData] = useState("dataSet1");
  const location = useLocation();
  const filterData = location.state; 
  const dispatch = useDispatch<AppDispatch>();
  const statecovidData = useSelector((state: RootState) => state.filterdata.statecovidData);
  const statedata:any[]=[]
  console.log(statecovidData)
  statecovidData.forEach((item, index) =>{
    statedata.push(state=item[0])
    
    Object.entries(item[1]).forEach(([key, value]) => {
     
      if (key === "activeCases") statedata.push(` ${value}`)
      if (key === "recovered") statedata.push(` ${value}`)
      if (key === "deaths") statedata.push(`${value}`)
        if (key === "latitude") statedata.push(`${value}`)
          if (key === "longitude") statedata.push(`${value}`)
      if (key === "totalCases") statedata.push(`${value}`)

    });

  } )
  
  useEffect(() => {
    dispatch(fetchStateCovidData(filterData)); 
  }, [dispatch]);
  const handleMenuChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    // Change dataset based on the selected option
    switch (selectedValue) {
      case 'pie':
        setSelectedData(e.target.value);
        break;
      case 'bar':
        setSelectedData(e.target.value);
        break;
      case 'map':
        setSelectedData(e.target.value);
        break;
      default:
        setSelectedData(e.target.value);
    }
  };

  return (
    <div>
      <Header states={ []} />
        <select onChange={handleMenuChange}>
        <option value="pie">Pie Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="map">Map View</option>
      </select>
      {selectedData==="pie"?
      <PieChart data={statedata}/>
      :selectedData==="bar"?
          <LineChart data={statedata} />
          :selectedData==="map"?
          <MapView data={statedata}/>:null }
    </div>
  );
};

export default FilterPage;
