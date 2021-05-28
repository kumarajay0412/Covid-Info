import React, {  useState,  useEffect } from 'react';
import useStyles from './styles';
import {Card,CardContent, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import death from '../../../../assets/death.svg';
import recovered from '../../../../assets/recovered.svg';
import infected from '../../../../assets/Infected.svg';
import {patientData} from '../../../../api/index';
import CountTo from 'react-count-to';

function Statecard({Sta,Dis,Code}) {
    const [Recoverd, setRecovered] = useState(null);
    const [Infected, setInfected] = useState(null);
    const [Death, setDeath] = useState(null);
    const [Recoverd2, setRecovered2] = useState(null);
    const [Infected2, setInfected2] = useState(null);
    const [Death2, setDeath2] = useState(null);
    const classes = useStyles();
    useEffect(() => {
            const fetcher = async()=>{
          const fetchedData = await patientData();
          const data1 = Object.values(fetchedData);
          const data2 = Object.keys(fetchedData);
          var key = -1
          for (var i=0; i<data1.length; i++) {
            if(data2[i].localeCompare(Code)===0){
                const statedata=data1[i].total;
                const statedata2=data1[i].delta;
                setInfected(statedata.confirmed)
                setRecovered(statedata.recovered)
                setDeath(statedata.deceased)
                setInfected2(statedata2.confirmed)
                setRecovered2(statedata2.recovered)
                setDeath2(statedata2.deceased)
                break;
            } }          
    }
        fetcher();
      
      },[]);

    return (
        <div className={classes.root}>
       
                    <Card className={classes.card} elevation={4}>
                        <CardContent>
                        <div>
                            <Grid  container spacing={1} >
                            <Grid item xs={5}>  <Typography className={classes.normal}> You are in</Typography> </Grid>
                            <Grid item xs={7}>  <Typography className={classes.highlight}> {Sta}</Typography> </Grid>
                            </Grid>
                            
                            {/* In 24 hr cases */}
                            <Grid  container spacing={1} >
                            <Grid item xs={12}>  <Typography className={classes.normal}>Covid Cases in Last 24hr :</Typography> </Grid>
                            </Grid>
                            <br></br>
                            <Grid  container spacing={5} >
                            <Grid item xs={4}>
                                <Grid  container spacing={1} >
                                    <Grid item xs={12}> <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight}><CountTo to= {Infected2} speed={4500} /></Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1}> Infected</Typography> </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}> 
                                <Grid  container spacing={1}  >
                                     <Grid item xs={12}><a><img src={recovered} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight} ><CountTo to= {Recoverd2} speed={4500} /></Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1} align="center" > Recoverd</Typography> </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid  container spacing={1} >
                                    <Grid item xs={12}><a><img src={death} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight} ><CountTo to= {Death2} speed={4500} /></Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1}>Deaths </Typography> </Grid>
                                </Grid> 
                            </Grid>
                            </Grid>
                            {/* Total cases */}
                
                              <Grid  container spacing={1} >
                            <Grid item xs={12}> <Typography className={classes.normal}> Total Covid Cases till now: </Typography></Grid>
                            </Grid>
                            <br></br>
                            <Grid  container spacing={5} >
                            <Grid item xs={4}>
                                <Grid  container spacing={1} >
                                    <Grid item xs={12}> <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight}><CountTo to= {Infected} speed={4500} /></Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1}> Infected</Typography> </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}> 
                                <Grid  container spacing={1}  >
                                     <Grid item xs={12}><a><img src={recovered} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight} ><CountTo to= {Recoverd} speed={4500} /></Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1} align="center" > Recoverd</Typography> </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid  container spacing={1} >
                                    <Grid item xs={12}><a><img src={death} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                    <Grid item xs={12}> <Typography className={classes.highlight} ><CountTo to= {Death}speed={4500} /></Typography>  </Grid>
                                    <br></br><br></br>
                                    <Grid item xs={12}><Typography className={classes.normal1}>Deaths </Typography> </Grid>
                                </Grid> 
                            </Grid>
                            </Grid>
                            
                        </div>
                        </CardContent>
                                
                    </Card>
    </div>
    )
}

export default Statecard
