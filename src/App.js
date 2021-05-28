import React, {  useState } from 'react';
import {Container,CircularProgress} from '@material-ui/core';
import Getadress from'./Components/Getadress'
import Header from'./Components/header/Header';
import Main from'./Components/Main';

const App =()=>{
  const [State, setState] = useState(null);
  const [District, setDistrict] = useState(null);
    return ( 
        <Container maxWidth="lg">
         <Getadress S={setState} D={setDistrict}/>
     
        <Header/>
		   
       
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        {!District? < CircularProgress /> : (    
         
        <Main Sta={State} Dis={District} />
        )}
        {/* <Worldcard/>
        <Indiacard/> */}
       </Container>

    );
  }


export default App;
