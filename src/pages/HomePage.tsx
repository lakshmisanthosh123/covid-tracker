import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchCovidData } from "../redux/actions/covidActions"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import TableWithPagination from "../components/TableWithPagination";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { covidData, loading, error } = useSelector((state: RootState) => state.covid);

  useEffect(() => {
    dispatch(fetchCovidData()); 
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>; 

 const states=Object.entries(covidData).map(([state]) => state)
  const rows = Object.entries(covidData).map(([state, values]: [string, any]) => ({
    
    state:state,
    total: values?.totalCases || 0,
    active: (values?.activeCases || 0),
    recovered: values?.recovered || 0,
    deaths: values?.deaths || 0,
  }));

  return (
    <div>
      <Header states={states} />
      <div className="app-container">
        {rows.length > 0 ? (
          <TableWithPagination data={rows} />
        ) : (
          <div>No data available.</div> 
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
