import React, {  useState,  useEffect } from 'react';
import useStyles from './styles';
import {Card,CardContent, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import death from '../../../../assets/death.svg';
import recovered from '../../../../assets/recovered.svg';
import infected from '../../../../assets/Infected.svg';
import {patientData} from '../../../../api/index';
import Districtmap from '../../../districtmap'
import CountTo from 'react-count-to';

function Districtcard({Sta,Dis,Code}) {
    const [Recoverd, setRecovered] = useState(0);
    const [Infected, setInfected] = useState(0);
    const [Death, setDeath] = useState(0);
    useEffect(() => {
        const fetcher = async()=>{
      const fetchedData = await patientData();
      const data1 = Object.values(fetchedData);
      const data2 = Object.keys(fetchedData);
      for (var i=0; i<data1.length; i++) {
       
        if(data2[i].localeCompare(Code)===0){
            const statedata=data1[i].districts;
            for (var j=0; j<statedata.length; j++) {
                if(statedata[j].localeCompare(Dis)===0){
                    const disdata=statedata[j].total;
                    setInfected(disdata.confirmed)
                    setRecovered(disdata.recovered)
                    setDeath(disdata.deceased)
                }}
            break;
        } } }
    fetcher();  
  },[]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
       
                    <Card className={classes.card} elevation={4} >
                        <CardContent>
                        <div>
                            <Grid  container  >
                            <Grid item xs={5}>  <Typography className={classes.normal}> You are in</Typography> </Grid>
                            <Grid item xs={7}>  <Typography className={classes.highlight}> {Dis}</Typography> </Grid>
                            <br></br>
                            <br></br>
                            <Grid item xs={12}>  <Typography className={classes.normal}> With Total cases :</Typography> </Grid>
                            <Grid item xs={12}>  <Typography className={classes.normal5}> Delhi district level data not available  </Typography> </Grid>
                            </Grid>
                            <br></br>

                            <Grid  container spacing={5} >

                                <Grid item xs={4}>
                                    <Grid  container spacing={1} >
                                        <Grid item xs={12}> <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid>
                                        {/* <Grid item xs={12}><img src={infected}/></Grid> */}
                                        <Grid item xs={12}> <Typography className={classes.highlight}>{Infected}</Typography>  </Grid>
                                        <br></br><br></br>
                                        <Grid item xs={12}><Typography className={classes.normal1}> Infected</Typography> </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={4}> 
                                    <Grid  container spacing={1}  >
                                        <Grid item xs={12}><a><img src={recovered} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                        <Grid item xs={12}> <Typography className={classes.highlight} >{Recoverd}</Typography>  </Grid>
                                        <br></br><br></br>
                                        <Grid item xs={12}><Typography className={classes.normal1} align="center" > Recovered</Typography> </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={4}>
                                    <Grid  container spacing={1} >
                                        <Grid item xs={12}><a><img src={death} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                        <Grid item xs={12}> <Typography className={classes.highlight} >{Death}</Typography>  </Grid>
                                        <br></br><br></br>
                                        <Grid item xs={12}><Typography className={classes.normal1}> Deaths</Typography> </Grid>
                                    </Grid> 
                                </Grid>
                                
                            </Grid>

                        </div>
                        </CardContent>
                                
                            <Districtmap/>
                    </Card>
    </div>
    )
}

export default Districtcard
