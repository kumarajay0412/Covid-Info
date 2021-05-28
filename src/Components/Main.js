import React, {  useState,  useEffect } from 'react';
import {CircularProgress ,Grid } from '@material-ui/core';
import useStyles from './styles';
import {Typography} from '@material-ui/core';
import Homecard from './Cards/Homecard';
import Worldcard from './Cards/Card/Normalcard/Worldcard'
import Indiacard from './Cards/Card/Normalcard/Indiacard'
import Vaccine from './Cards/Card/Normalcard/Vaccine'


function Main({Sta,Dis}) {
    const classes = useStyles();
    const [Statecode, setStatecode] = useState(null);
    var name = ["Delhi","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir",
    "Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa"
    ,"Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Tamil Nadu","Tripura","Andaman and Nicobar Islands","Chandigarh"
        ,"Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","Pondicherry"];
    var code = ["DL","AP","AR","AS","BR","CG","GA","GJ","HR","HP","JK","JH","KA","KL","MP","MH","MN","ML","MZ","NL","OR","PB","RJ","SK","TN","TR","UK","UP","WB","TN","TR","AN","CH","DH","DD","LD","PY"];
    
    useEffect(() => {
    if(Sta){
    for (var i=0; i<name.length; i++) {
        if(name[i].localeCompare(Sta)==0){
            setStatecode(code[i]);
            break;
        }
    }
    }
},[Sta]);
    return (
        !(Dis && Sta && Statecode )? < CircularProgress /> : (
        <div>
             <br></br><br></br><br></br>
            <Homecard Sta={Sta} Dis={Dis} Code={Statecode}/>
            <br></br><br></br>  <br></br><br></br>  <br></br><br></br>  
            <br></br><br></br>
            <br></br><br></br>
            <Grid container spacing={0} direction="row" alignItems="center" justify="center" >
                <Typography className={classes.highlight} alignContent="center" >World Wide Count </Typography>
            </Grid>
            <br></br><br></br>
            <Worldcard/>
            <br></br>  <br></br>
            <Grid container spacing={0} direction="row" alignItems="center" justify="center" >
                <Typography className={classes.highlight} alignContent="center" >India Count </Typography>
            </Grid>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <Grid container spacing={6} direction="row" alignItems="center" justify="center">
            <Grid item xs={12} sm={6}><Indiacard/> </Grid>
            <Grid item xs={12} sm={6}> <Vaccine/> </Grid>
            </Grid>

        </div>
        )
    )
}

export default Main
