import React, {  useState,  useEffect } from 'react';
import {patientData} from './api/index';
import Districtmap from'./Components/districtmap'
import Getadress from'./Components/Getadress'
import Header from'./Components/header/Header';
import Homecard from'./Components/Cards/Homecard';
const App =()=>{
    // const watch = true;
    // const {latitude, longitude, error} = usePosition();
    useEffect(() => {
        const fetcher =async()=>{
        const fetchedData = await (patientData());
        if(!fetchedData){
        console.log(fetchedData)
        }}
        fetcher();
      }); 
    // const [District, setDistrict] = useState(null);
    // const [State, setState] = useState(null);
  
    // console.log(State,District)
    // //  useEffect(() => {
    //     const {s,d} = Getadress();
    // setState(s);
    // setDistrict(d);

    return (
      <div className="App">
        {/* <Getadress/> */}
        <Header/>
        <Homecard/>
      </div>

    );
  }


export default App;
