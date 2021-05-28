import React, {  useState,  useEffect } from 'react';
import useStyles from './styles';
import {Card,CardContent,Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import injection from '../../../../assets/injection.png';
import {patientData} from '../../../../api/index';
import CountTo from 'react-count-to';

function Statecard({Sta,Dis,Code}) {
    const [Vaccinated, setVaccinated] = useState(null);
    const [Tetsed, setTetsed] = useState(null);
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
                setTetsed(statedata2.tested);
                setVaccinated(statedata.vaccinated);
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
                            <Grid item xs={1}>  <Typography className={classes.normal}> In</Typography> </Grid>
                            <Grid item xs={11}>  <Typography className={classes.highlight}> {Sta}</Typography> </Grid>
                            </Grid>   
                            <br></br>
                             <Grid container spacing={7} >
                                    <Grid item xs={12}>
                                        <Grid  container spacing={0} >
                                            <Grid item xs={12}>  <Typography className={classes.normal2}>Covid Test done today</Typography> </Grid>
                                            <br></br>
                                            <br></br>
                                            <Grid item xs={4}>  <Typography className={classes.highlight}>  <CountTo to= {Tetsed} speed={4500} /> </Typography> </Grid>
                                        </Grid>
                                    </Grid> 
                            </Grid>  
                            <br></br>
                            <br></br>
                            <br></br>
                            <Grid  container spacing={0} >
                            
                                    <Grid item xs={12}>  <Typography className={classes.normal}>Vaccination Status : </Typography> </Grid>
                                    <Grid item xs={3}><a><img src={injection} height="200" width="60" alt='corona' /><b></b></a></Grid>
                                    <Grid item xs={9}>
                                    <br></br>
                                    <br></br>
                                    
                                        <Grid  container spacing={0} >
                                            <Grid item xs={1}>  <Typography className={classes.normal2}></Typography> </Grid>
                                            <Grid item xs={5}>  <Typography className={classes.normal2}>Total :</Typography> </Grid>
                                            <Grid item xs={6}>  <Typography className={classes.highlight1}> <CountTo to= {Vaccinated}  speed={4500} /></Typography> </Grid>
                                        </Grid>
                                        <br></br>
                                        <Grid  container spacing={1} >
                                            <Grid item xs={1}>  <Typography className={classes.normal2}></Typography> </Grid>
                                            <Grid item xs={5}>  <Typography className={classes.normal2}>Dose 1 :</Typography> </Grid>
                                            <Grid item xs={6}>  <Typography className={classes.highlight1}><CountTo to= {1220} speed={4500} /></Typography> </Grid>
                                        </Grid>
                                        <Grid  container spacing={0} >
                                            <Grid item xs={1}>  <Typography className={classes.normal2}></Typography> </Grid>
                                            <Grid item xs={5}>  <Typography className={classes.normal2}>Dose 2 :</Typography> </Grid>
                                            <Grid item xs={5}>  <Typography className={classes.highlight1}> <CountTo to= {1233} speed={4500} /></Typography> </Grid>
                                        
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
