import React, {  useState } from 'react';
import {Container,CircularProgress} from '@material-ui/core';
import Getadress from'./Components/Getadress'
import Header from'./Components/header/Header';
import Main from'./Components/Main';
import Footer from './Components/footer/Footer'
import GiveLocation from './Components/GiveLocation';
const App =()=>{
  const [State, setState] = useState(null);
  const [District, setDistrict] = useState(null);
    return ( <div>
        <Container maxWidth="lg" >
         <Getadress S={setState} D={setDistrict}/>
     
        <Header/>
		   
       
        <br></br>
        
        

        <br></br>
        <br></br>
        {
        !District? < GiveLocation /> : (    
        <Main Sta={State} Dis={District} />

        )}

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        
       </Container>
       <Footer/>
       </div>

    );
  }


export default App;
