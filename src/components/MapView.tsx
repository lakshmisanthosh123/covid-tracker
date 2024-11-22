import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer,Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainerProps } from "react-leaflet";
const CustomTileLayer = TileLayer as React.FC<any>;


interface ExtendedMapContainerProps extends MapContainerProps {
  center: [number, number];
  zoom: number;
}

const MapView = (data:any) => {
  const [state, setState] = useState("");
  const [activeCases, setActiveCases] = useState();
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lat, setlat] = useState(0);
  const [log, setlog] = useState(0);
  const [total, settotal] = useState(0);
  const mapProps: ExtendedMapContainerProps = {
    center: [20.5937, 78.9629], 
    zoom: 13, 
    style: { height: "100%", width: "100%" }, 
  };
  useEffect(() => {
    console.log(data.data)
    data.data.forEach((value:any)=>{
      setState(data.data[0]);
      setActiveCases(data.data[1]);
      setRecovered(data.data[2]);
      setDeaths(data.data[3]);
      setlat(data.data[4]);
      setlog(data.data[5]);
      settotal(data.data[6]);
    })
    
  }, [data]);
 
  return (
    <MapContainer {...mapProps}>
      <CustomTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker
          key={state}
          position={[lat,log]}
        >
          
        
      
          <Popup>
            <h3>{state}</h3>
            <p>
              <strong>Total Cases:</strong> {total}
            </p>
            <p>
              <strong>Active Cases:</strong> {activeCases}
            </p>
            <p>
              <strong>Recovered:</strong> {recovered}
            </p>
            <p>
              <strong>Deaths:</strong> {deaths}
            </p>
          </Popup>
          </Marker>
    </MapContainer>
  );
};

export default MapView;
