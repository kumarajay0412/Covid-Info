import React, {  useState,  useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {patientData} from './api/index';
import Districtmap from'./Components/districtmap'
import Getadress from'./Components/Getadress'
import Header from'./Components/header/Header';
import Main from'./Components/Main';

const App =()=>{
    // const watch = true;
    // const {latitude, longitude, error} = usePosition();
    // useEffect(() => {
    //     const fetcher =async()=>{
    //     const fetchedData = await (patientData());
    //     if(!fetchedData){
    //     console.log(fetchedData)
    //     }}
    //     fetcher();
    //   }); 
    // const [District, setDistrict] = useState(null);
    // const [State, setState] = useState(null);
  
    // console.log(State,District)
    // //  useEffect(() => {
    //     const {s,d} = Getadress();
    // setState(s);
    // setDistrict(d);

    return (
      <Container maxWidth="lg">
        {/* <Getadress/> */}
        <Header/>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
       <Main/>
       </Container>

    );
  }


export default App;
