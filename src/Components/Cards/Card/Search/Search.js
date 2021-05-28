import React, {  useState,  useEffect } from 'react';
import useStyles from './styles';
import {Card,CardContent, Typography} from '@material-ui/core';
import {patientData} from'../../../../api/index'
import Grid from '@material-ui/core/Grid';
import infected from '../../../../assets/Infected.svg';
import recovered from '../../../../assets/recovered.svg';
import death from '../../../../assets/death.svg';
import common from '../../../../assets/common.png';
import CountTo from 'react-count-to';
import Citymap from '../../../Citymap';

function Search({Place}) {
    const [Recoverd, setRecovered] = useState(0);
    const [Infected, setInfected] = useState(0);
    const [Death, setDeath] = useState(0);
    var name = ["Delhi","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir",
    "Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa"
    ,"Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Tamil Nadu","Tripura","Andaman and Nicobar Islands","Chandigarh"
        ,"Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","Pondicherry"];
    var code = ["DL","AP","AR","AS","BR","CG","GA","GJ","HR","HP","JK","JH","KA","KL","MP","MH","MN","ML","MZ","NL","OR","PB","RJ","SK","TN","TR","UK","UP","WB","TN","TR","AN","CH","DH","DD","LD","PY"];

    const classes = useStyles();
    useEffect(() => {
        
        const fetcher =async()=>{
            var key = 0;
            var Place1=null;
            for (var z=0; z<name.length; z++){
                if(name[z].toLowerCase()===Place){
                    Place1 = code[z];
                    key = 1;
                    break;
                }
              }
          const fetchedData = await patientData();
          console.log(fetchedData);
          for (var j=0; j<fetchedData.length; j++){
              if(key===1){
                if(fetchedData[j]===Place1){
                    setInfected(fetchedData[j].total.confirmed);
                    setRecovered(fetchedData[j].total.deceased);
                    setDeath(fetchedData[j].total.recovered);
                    break;
                }
              }
              else{
                  var temp=fetchedData[i].districts;
                for (var i=0; i<temp.length; i++){
                    if(temp[i].toLowerCase()===Place){
                        setInfected(temp[i].total.confirmed);
                        setRecovered(temp[i].total.deceased);
                        setDeath(temp[i].total.recovered);
                        break;
                    }  
                }}}
                console.log(Place,Place1)
        }
        fetcher();
      },[]);
    return (
        <div>
            <Grid container spacing={3} direction="column" alignItems="center" justify="center" style={{ minHeight: '50vh' }}>

                <Grid  container spacing={1} >
                        <Grid item xs={12} sm={1} >  </Grid>  
                            <Grid item xs={12} sm={6} >
                            <Card className={classes.card} elevation={4} expand> 
                                {/* <Citymap/>  */}
                            </Card> 
                            </Grid>
                        <Grid item xs={12} sm={1} >  </Grid>     
                    <Grid item xs={12} spacing={3} sm={3} >

                        <Grid item xs={12}>
                        <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${common})` }}>       
                                <CardContent>
                                    <div>
                                        <Grid  container spacing={1} >
                                            <Grid item xs={3}>  <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                            <Grid item xs={9}>  <Typography className={classes.black}> Confirmed Cases </Typography> </Grid>
                                            <Grid item xs={12}>  <Typography className={classes.yellow}> <CountTo to= {Infected} speed={4500} /> </Typography> </Grid>
                                        </Grid>
                                        <br></br>
                        
                                    </div>
                                </CardContent>     
                        </Card>  
                        </Grid>

                        <br></br>

                        <Grid item xs={12}>
                        <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${common})` }}>       
                                <CardContent>
                                    <div>
                                        <Grid  container spacing={1} >
                                            <Grid item xs={3}>  <a><img src={recovered} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                            <Grid item xs={9}>  <Typography className={classes.black}> Recovered Cases </Typography> </Grid>
                                            <Grid item xs={7}>  <Typography className={classes.green}> <CountTo to= {Recoverd} speed={4500} /></Typography> </Grid>
                                        </Grid>
                                        <br></br>  
                                    </div>
                                </CardContent>     
                        </Card>  
                        </Grid>

                        <br></br>

                        <Grid item xs={12}>
                        <Card className={classes.card} elevation={4} expand style={{color: '#fff', background: `url(${common})` }}>       
                                <CardContent>
                                    <div>
                                          <Grid  container spacing={1} >
                                            <Grid item xs={3}>  <a><img src={death} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                            <Grid item xs={9}>  <Typography className={classes.black}> Deaths </Typography> </Grid>
                                            <Grid item xs={7}>  <Typography className={classes.brown}> <CountTo to= {Death} speed={4500} /></Typography> </Grid>
                                        </Grid>
                                        <br></br>
                
                                    </div>
                                </CardContent>     
                        </Card>  
                        </Grid>
                    </Grid>

            </Grid>
            </Grid> 
    
        </div>
    )
}

export default Search
